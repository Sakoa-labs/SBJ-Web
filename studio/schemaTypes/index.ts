import { guide } from './guide.ts'
import { guidesBundle } from './guides-bundle.ts'
import { pageTypes } from './pages/index.ts'
import { review } from './review.ts'
import { service } from './service.ts'
import { settings } from './settings.ts'

export const schemaTypes = [service, guide, guidesBundle, review, settings, ...pageTypes]
