import { contactPages } from './contact.ts'
import { homePages } from './home.ts'
import { learningPages } from './learning.ts'
import { servicePages } from './services.ts'

const groups = [homePages, servicePages, learningPages, contactPages]

export const pageTypes = groups.flatMap((group) => group.types)
export const pageDocuments = groups.flatMap((group) => group.documents)
