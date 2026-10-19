# Joie d'Être par Sabrina

Site vitrine de Joie d'Être : massages, soins du visage, épilation, formations et guides.

Construit avec TanStack Start (React 19), Tailwind CSS v4 et Vite.

## Démarrer

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

```bash
pnpm build    # build de production
pnpm preview  # prévisualiser le build
```

## Contenu (Sanity)

Tout le contenu se modifie dans le Studio Sanity : prestations, guides, avis, coordonnées et horaires,
mais aussi les textes et photos de chaque page, l'ordre de leurs sections et les pages légales.
Le Studio est accessible à cette adresse :
**https://joiedetre.sanity.studio** (projet `8pst1xci`, dataset public `production`).

- `pnpm dev` et `pnpm build` téléchargent d'abord le contenu publié dans `src/content/content.json`
  (non versionné) via `scripts/pull-content.ts`, qui vérifie aussi qu'aucun champ ne manque.
- `pnpm content` retélécharge le contenu sans relancer le serveur.
- Le site reste statique : une publication dans le Studio n'apparaît en ligne qu'après une nouvelle compilation.
- Chaque page a son document (`page-home`, `page-massages`…) : un haut de page fixe, puis des sections
  que Sabrina réordonne ou masque. Les titres s'écrivent avec `*mots en doré*` et des retours à la ligne
  (`RichTitle` dans `src/components/ui/rich-text.tsx`). Les liens et les décors restent dans le code.

Le Studio est dans `studio/`, avec ses propres dépendances :

```bash
cd studio
pnpm install
pnpm dev      # Studio en local sur http://localhost:3333
pnpm deploy   # publier le Studio sur joiedetre.sanity.studio
```

## Pages

| Route        | Contenu                                   |
| ------------ | ----------------------------------------- |
| `/`          | Accueil                                   |
| `/massages`  | Carte des massages, FAQ                   |
| `/soins`     | Carte des soins du visage, FAQ            |
| `/epilation` | Zones, forfaits maillot, FAQ              |

## Structure

- `src/routes/` : une route par page (routing par fichiers TanStack).
- `src/components/landing/` : sections de l'accueil, dont des briques réutilisées ailleurs (FAQ, CTA final, boutons).
- `src/components/services/` : hero, carte et FAQ partagés par les pages Massages, Soins et Épilation.
- `src/components/{massage,soins,epilation}/` : contenu propre à chaque page.
- `src/assets/` : icônes et objets décoratifs détourés. Toute image PNG ou JPEG importée dans le code
  est convertie en WebP au build (`vite-imagetools`, voir `vite.config.ts`) : on garde les originaux.
- `design/` : maquettes, photos et décors sources.
- `src/styles.css` : tokens du design system, boutons, animations.

## Organisation des branches

| Branche     | Rôle                                                              |
| ----------- | ----------------------------------------------------------------- |
| `main`      | Version en production. On n'y pousse jamais directement.          |
| `develop`   | Intégration : tout le travail en cours y est fusionné.            |
| `feature/*` | Une nouvelle page ou section (ex. `feature/page-formations`).     |
| `fix/*`     | Une correction (ex. `fix/menu-mobile`).                           |

Déroulé :

1. Partir de `develop` : `git switch develop && git pull && git switch -c feature/ma-fonctionnalite`.
2. Commits courts et explicites.
3. Ouvrir une pull request vers `develop`.
4. Quand `develop` est validé, ouvrir une pull request `develop` → `main` pour mettre en production.
