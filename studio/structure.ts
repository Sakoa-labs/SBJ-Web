import type { StructureResolver } from 'sanity/structure'

// Pages, with their FAQ, in the order of the site's menu.
export const pages = [
  { id: 'page-home', title: 'Accueil' },
  { id: 'page-massages', title: 'Massages' },
  { id: 'page-soins', title: 'Soins visage' },
  { id: 'page-epilation', title: 'Épilation' },
  { id: 'page-formation', title: 'Formation' },
]

const servicesIn = (S: Parameters<StructureResolver>[0], title: string, filter: string) =>
  S.listItem()
    .title(title)
    .child(
      S.documentList()
        .title(title)
        .schemaType('service')
        .filter(`_type == "service" && ${filter}`)
        .defaultOrdering([{ field: 'order', direction: 'asc' }]),
    )

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu du site')
    .items([
      S.listItem()
        .title('Prestations')
        .child(
          S.list()
            .title('Prestations')
            .items([
              servicesIn(S, 'Massages', 'category == "massages"'),
              servicesIn(S, 'Soins visage', 'category == "soins"'),
              servicesIn(S, 'Épilation', 'category == "epilation"'),
            ]),
        ),
      S.listItem()
        .title('Guides')
        .child(
          S.list()
            .title('Guides')
            .items([
              S.documentTypeListItem('guide').title('Les guides'),
              S.listItem()
                .title('Coffret des guides')
                .child(S.document().schemaType('guidesBundle').documentId('guidesBundle')),
            ]),
        ),
      S.documentTypeListItem('review').title('Avis clients'),
      S.divider(),
      S.listItem()
        .title('Pages et FAQ')
        .child(
          S.list()
            .title('Pages et FAQ')
            .items(
              pages.map(({ id, title }) =>
                S.listItem().title(title).id(id).child(S.document().schemaType('page').documentId(id).title(title)),
              ),
            ),
        ),
      S.listItem()
        .title('Coordonnées et horaires')
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
