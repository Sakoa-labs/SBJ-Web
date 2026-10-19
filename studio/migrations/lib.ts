// Helpers for the one-off scripts that copy the texts and photos of the site into Sanity.
// Run from studio/ with: npx sanity exec migrations/<page>.ts --with-user-token

import { createReadStream } from 'node:fs'
import { basename, resolve } from 'node:path'
import { getCliClient } from 'sanity/cli'

export const client = getCliClient({ apiVersion: '2026-10-01' })

// Paths are relative to the repository root, as in the site's imports.
const root = resolve(import.meta.dirname, '../..')

const uploads = new Map<string, Promise<string>>()

// Uploads a local image once (Sanity also deduplicates identical files) and returns an image field.
export async function image(path: string, alt?: string) {
  const file = resolve(root, path)
  if (!uploads.has(file)) {
    uploads.set(
      file,
      client.assets.upload('image', createReadStream(file), { filename: basename(file) }).then((asset) => asset._id),
    )
  }
  const ref = await uploads.get(file)!
  return { _type: 'image', asset: { _type: 'reference', _ref: ref }, ...(alt ? { alt } : {}) }
}

let count = 0
export const key = () => `m${(count++).toString(36).padStart(4, '0')}`

// Adds the _key Sanity needs on every array item.
export const keyed = <T extends object>(items: Array<T>) => items.map((item) => ({ _key: key(), ...item }))

export async function save(document: { _id: string; _type: string; [field: string]: unknown }) {
  const existing = await client.getDocument(document._id)
  // A document cannot change type, even within a transaction: the old one is removed first.
  if (existing && existing._type !== document._type) {
    await client.delete(document._id)
    await client.create(document)
  } else {
    await client.createOrReplace(document)
  }
  console.log(`${document._id} enregistré`)
}
