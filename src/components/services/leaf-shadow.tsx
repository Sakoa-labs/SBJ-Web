import { cn } from '#/lib/utils'
import bananier from '#/assets/leaf-shadows/ombre-bananier.png'
import frangipanier from '#/assets/leaf-shadows/ombre-frangipanier.png'
import monstera from '#/assets/leaf-shadows/ombre-monstera.png'
import palme from '#/assets/leaf-shadows/ombre-palme.png'

const leaves = { bananier, frangipanier, monstera, palme }

// Faint, blurred foliage shadow cast on a cream section, as if sunlight came through the leaves.
// Goes under the section's light gradients; only on wide screens, where it stays off the text.
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
        'pointer-events-none absolute -z-[25] hidden h-auto max-w-none object-contain opacity-[0.06] blur-[3px] lg:block',
        className,
      )}
      width={1024}
      height={1024}
      loading="lazy"
    />
  )
}
