import { Fragment } from 'react'
import type { ReactNode } from 'react'

// Renders the sections of a page in the order chosen in Sanity, leaving out hidden ones.
export function PageSections<S extends { _key: string; hidden?: boolean }>({
  sections,
  render,
}: {
  sections: ReadonlyArray<S>
  render: (section: S) => ReactNode
}) {
  return (
    <>
      {sections
        .filter((section) => !section.hidden)
        .map((section) => (
          <Fragment key={section._key}>{render(section)}</Fragment>
        ))}
    </>
  )
}
