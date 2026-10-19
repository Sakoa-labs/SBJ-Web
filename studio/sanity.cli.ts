import { defineCliConfig } from 'sanity/cli'

import { dataset, projectId } from './project.ts'

export default defineCliConfig({
  api: { projectId, dataset },
  // Published at https://joiedetre.sanity.studio
  studioHost: 'joiedetre',
  deployment: { appId: 'elu5hke0itxqxczfjc2fyi18', autoUpdates: true },
})
