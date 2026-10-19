import { defineConfig, defineSingleton } from 'sanity'
import { structureTool } from 'sanity/structure'
import { frFRLocale } from '@sanity/locale-fr-fr'

import { dataset, projectId } from './project.ts'
import { schemaTypes } from './schemaTypes/index.ts'
import { pages, structure } from './structure.ts'

export default defineConfig({
  name: 'default',
  title: 'Joie d’Être',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), frFRLocale()],
  schema: { types: schemaTypes },
  document: {
    // Fixed documents: they can be edited but not created, duplicated or deleted.
    singletons: [
      'guidesBundle',
      'settings',
      ...pages.map(({ id, title }) => defineSingleton({ documentId: id, schemaType: 'page', title, initialValue: { title } })),
    ],
  },
})
