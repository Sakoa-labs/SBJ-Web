// Shapes shared by the page documents downloaded from Sanity (see scripts/pull-content.ts).

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

// A small decorative illustration: only its file matters.
export type Icon = Photo

export type Card = {
  _key: string
  title: string
  description: string
  icon: Icon
}

export type FaqItem = {
  _key: string
  question: string
  answer: string
}

// One section of a page, identified by its Sanity type, which can be hidden by Sabrina.
export type Section<Type extends string, Fields> = Fields & {
  _type: Type
  _key: string
  hidden?: boolean
}
