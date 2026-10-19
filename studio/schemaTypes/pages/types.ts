import type { SchemaTypeDefinition } from 'sanity'

// A group of page documents: their schema types, and the fixed documents listed under « Pages ».
export type PageGroup = {
  types: Array<SchemaTypeDefinition>
  // In the order of the site's menu. Each document is a singleton with a fixed id starting with "page-".
  documents: Array<{ id: string; title: string; schemaType: string }>
}
