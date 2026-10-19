import { guide } from './guide.ts'
import { guidesBundle } from './guides-bundle.ts'
import { page } from './page.ts'
import { pageTypes } from './pages/index.ts'
import { review } from './review.ts'
import { service } from './service.ts'
import { settings } from './settings.ts'

// « page » holds the FAQ of the pages not yet moved to their own document type.
export const schemaTypes = [service, guide, guidesBundle, review, page, settings, ...pageTypes]
