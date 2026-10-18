import { GoldDivider, SectionEyebrow } from '#/components/landing/section-ornaments'
import tableImage from '../../../design/contact/salle-table.jpg'
import roomImage from '../../../design/contact/salle-solo.jpg'
import duoImage from '../../../design/contact/salle-duo.jpg'

// The massage room, from the previous site's "Salle de massage" page; its product photos
// are left out on purpose.
export function ContactRoomSection() {
  return (
    <section
      id="salle"
      className="relative isolate overflow-hidden bg-[#062b23] py-16 text-[#fff9ec] sm:py-20 lg:py-28"
      aria-labelledby="salle-title"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(27,91,73,0.45),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(212,175,55,0.08),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[84rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
        <div>
          <SectionEyebrow label="La salle" className="items-start [&>img]:self-start" />
          <h2
            id="salle-title"
            className="mt-4 text-[clamp(2.2rem,7vw,3.6rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[#fff5df]"
          >
            Un cocon pour <em className="font-normal text-[#e5bd42]">se ressourcer</em>
          </h2>
          <p className="mt-6 max-w-[32rem] text-pretty text-base leading-7 text-[#fff9ec]/82 sm:text-lg sm:leading-8">
            Une pièce aménagée chez Sabrina, au calme, pour se ressourcer en toute simplicité. Les
            soins y sont réalisés avec des produits 100&nbsp;% naturels, qui respectent votre peau et
            l’environnement.
          </p>
          <GoldDivider compact className="mt-8" />
          <blockquote className="mt-6 max-w-[30rem] font-heading text-[1.35rem] italic leading-snug text-[#fff5df] sm:text-[1.6rem]">
            «&nbsp;Offrez à votre corps le soin qu’il mérite, il vous le rendra en énergie et
            sérénité.&nbsp;»
          </blockquote>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <figure className="col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-[#d4af37]/60 shadow-[0_28px_60px_rgba(0,0,0,0.35)]">
            <img
              src={tableImage}
              alt="La table de massage préparée, serviettes roulées et bougies, devant la fenêtre"
              className="size-full object-cover"
              width={1600}
              height={1200}
              loading="lazy"
            />
          </figure>
          <figure className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#d4af37]/60 shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
            <img
              src={roomImage}
              alt="La salle de massage, ses murs végétalisés et sa table drapée de blanc"
              className="size-full object-cover"
              width={1600}
              height={1114}
              loading="lazy"
            />
          </figure>
          <figure className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#d4af37]/60 shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
            <img
              src={duoImage}
              alt="Deux tables de massage côte à côte dans la salle"
              className="size-full object-cover"
              width={1600}
              height={1200}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
