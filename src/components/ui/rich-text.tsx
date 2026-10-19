import { Fragment } from 'react'
import type { ReactNode } from 'react'

import { cn } from '#/lib/utils'

// French typography: a non-breaking space before ? ! : ; so they never start a line.
function frenchSpaces(text: string) {
  return text.replace(/ ([?!:;»])/g, ' $1').replace(/« /g, '« ')
}

function withAccents(line: string, accentClassName?: string): ReactNode {
  return frenchSpaces(line)
    .split(/\*([^*]+)\*/)
    .map((part, index) =>
      index % 2 ? (
        <em key={index} className={cn('font-normal', accentClassName)}>
          {part}
        </em>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    )
}

// Titles edited in Sanity: each line break starts a new line, and words between asterisks
// are shown in gold italics.
export function RichTitle({
  text,
  accentClassName,
  lineClassName,
}: {
  text: string
  accentClassName?: string
  lineClassName?: string
}) {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  if (lines.length === 1) return <>{withAccents(lines[0], accentClassName)}</>
  return (
    <>
      {lines.map((line, index) => {
        // A line entirely in gold is the emphasis itself, so its spacing counts in the layout.
        const accentOnly = /^\*[^*]+\*$/.exec(line)
        return accentOnly ? (
          <em key={index} className={cn('block font-normal', accentClassName, lineClassName)}>
            {frenchSpaces(line.slice(1, -1))}
          </em>
        ) : (
          <span key={index} className={cn('block', lineClassName)}>
            {withAccents(line, accentClassName)}
          </span>
        )
      })}
    </>
  )
}

// Paragraphs edited in Sanity: a line break only applies from tablet width up, so the text
// keeps flowing naturally on phones.
export function WideScreenBreaks({ text }: { text: string }) {
  return (
    <>
      {frenchSpaces(text)
        .split('\n')
        .map((line, index) => (
          <Fragment key={index}>
            {index > 0 && <br className="hidden sm:block" />}
            {line.trim()}
          </Fragment>
        ))}
    </>
  )
}
