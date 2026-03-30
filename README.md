# SunuFarm Site

Site marketing de SunuFarm, une application de gestion avicole orientée terrain pour les éleveurs, responsables d'exploitation et structures avicoles.

Le site a deux objectifs principaux :

- présenter clairement la proposition de valeur de SunuFarm ;
- convertir les visiteurs en demandes de démonstration, prises de contact WhatsApp ou inscriptions.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Resend pour l'envoi des formulaires

## Sections du site

La page d'accueil assemble les sections marketing suivantes :

- `Hero`
- `Screenshots`
- `Problems`
- `Value`
- `Audience`
- `Pricing`
- `FAQ`
- `Download`
- `Contact`

Le formulaire de contact et le formulaire de liste d'attente passent par des Server Actions dans `app/actions.ts`.

Le site inclut aussi :

- un CTA WhatsApp dans le hero ;
- un bouton WhatsApp flottant ;
- une section screenshots qui reconstitue plusieurs écrans produit : dashboard, lots, santé, finances, rapports, ventes et clients.

## Lancer le projet

Installer les dépendances :

```bash
npm install
```

Démarrer le serveur de développement :

```bash
npm run dev
```

Construire pour la production :

```bash
npm run build
```

Lancer la version de production localement :

```bash
npm run start
```

Vérifier le lint :

```bash
npm run lint
```

Le site est ensuite accessible sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copier `.env.local.example` vers `.env.local`, puis renseigner les valeurs :

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contact@sunufarm.com
```

Usage :

- `RESEND_API_KEY` : clé API Resend utilisée pour envoyer les emails ;
- `CONTACT_EMAIL` : adresse qui reçoit les demandes de démo et les inscriptions.

Sans configuration Resend valide, les formulaires ne pourront pas envoyer d'email.

## WhatsApp

Le lien WhatsApp utilise le numéro configuré dans `lib/whatsapp.ts` avec un message pré-rempli.

- numéro actuel : `+221 76 312 69 22`
- message : `Bonjour, je souhaite en savoir plus sur SunuFarm et demander une démonstration.`

## Structure utile

```text
app/
  actions.ts        # Server Actions pour les formulaires
  layout.tsx        # Layout global
  page.tsx          # Composition de la page d'accueil
  globals.css       # Styles globaux

components/
  layout/           # Navbar, footer, theme toggle, bouton WhatsApp flottant
  marketing/        # Sections de la landing page et aperçus produit

lib/
  site.ts           # URL du site marketing et URL de l'application
  whatsapp.ts       # lien WhatsApp et message pré-rempli

docs/
  marketing-direction.md   # intention marketing et positionnement du site

public/             # assets statiques
```

## Parcours couverts

- demande de démonstration depuis la section `Contact` ;
- prise de contact directe via WhatsApp ;
- inscription / demande de démo légère depuis la section `Download` ;
- redirection vers l'application via `https://app.sunufarm-app.com`.

## Positionnement de la landing

La landing actuelle est pensée pour être plus orientée conversion que le template initial :

- hero axé sur les résultats : pertes, rentabilité, pilotage ;
- problèmes et valeur formulés de manière plus concrète et business ;
- offre `Pro` mise en avant comme formule recommandée ;
- preuves produit visuelles via une grande section screenshots inspirée des écrans réels de l'application ;
- marqueurs de crédibilité : usage terrain, simplicité, adaptation à l'Afrique francophone.

## Notes de contenu

Le positionnement marketing du site est documenté dans [docs/marketing-direction.md](./docs/marketing-direction.md). Le ton du site doit rester simple, concret, crédible et orienté résultat plutôt que liste brute de fonctionnalités.
