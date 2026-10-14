import { cn } from '#/lib/utils'
import bananier from '#/assets/leaf-shadows/ombre-bananier.png'
import frangipanier from '#/assets/leaf-shadows/ombre-frangipanier.png'
import monstera from '#/assets/leaf-shadows/ombre-monstera.png'
import palme from '#/assets/leaf-shadows/ombre-palme.png'

const leaves = { bananier, frangipanier, monstera, palme }

// Faint, blurred foliage shadow cast on a cream section, as if sunlight came through the leaves.
// Goes under the section's light gradients; only on wide screens, where it stays off the text.
// Solid leaves are drawn at 2048 px with a soft edge already baked in, so only the palm is blurred.
export function LeafShadow({
  leaf,
  className,
}: {
  leaf: keyof typeof leaves
  className: string
}) {
  return (
    <img
      src={leaves[leaf]}
      alt=""
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -z-[25] hidden h-auto max-w-none object-contain opacity-[0.06] lg:block',
        leaf === 'palme' && 'blur-[3px]',
        className,
      )}
      width={leaf === 'palme' ? 768 : 2048}
      height={leaf === 'palme' ? 768 : 2048}
      loading="lazy"
    />
  )
}
