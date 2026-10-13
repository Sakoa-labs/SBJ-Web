import { createFileRoute } from '@tanstack/react-router'

import designSystemHtml from '../../design-system.html?raw'

export const Route = createFileRoute('/design-system')({
  component: DesignSystemPreview,
})

function DesignSystemPreview() {
  return (
    <iframe
      srcDoc={designSystemHtml}
      title="Design System de Joie d'Être par Sabrina"
      className="block min-h-svh w-full border-0"
    />
  )
}
