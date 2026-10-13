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
- `src/assets/` : icônes et objets décoratifs détourés.
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
