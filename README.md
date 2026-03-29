# SunuFarm Site

Site marketing de SunuFarm, une application de gestion avicole orientee terrain pour les eleveurs, responsables d'exploitation et structures avicoles.

Le site a deux objectifs principaux :

- presenter clairement la proposition de valeur de SunuFarm ;
- convertir les visiteurs en demandes de demonstration, prises de contact WhatsApp ou inscriptions.

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
- une section screenshots qui reconstitue plusieurs ecrans produit : dashboard, lots, sante, finances, rapports, ventes et clients.

## Lancer le projet

Installer les dependances :

```bash
npm install
```

Demarrer le serveur de developpement :

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

Verifier le lint :

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

- `RESEND_API_KEY` : cle API Resend utilisee pour envoyer les emails ;
- `CONTACT_EMAIL` : adresse qui recoit les demandes de demo et les inscriptions.

Sans configuration Resend valide, les formulaires ne pourront pas envoyer d'email.

## WhatsApp

Le lien WhatsApp utilise le numero configure dans `lib/whatsapp.ts` avec un message pre-rempli.

- numero actuel : `+221 76 312 69 22`
- message : `Bonjour, je souhaite en savoir plus sur SunuFarm et demander une demonstration.`

## Structure utile

```text
app/
  actions.ts        # Server Actions pour les formulaires
  layout.tsx        # Layout global
  page.tsx          # Composition de la page d'accueil
  globals.css       # Styles globaux

components/
  layout/           # Navbar, footer, theme toggle, bouton WhatsApp flottant
  marketing/        # Sections de la landing page et apercus produit

lib/
  whatsapp.ts       # lien WhatsApp et message pre-rempli

docs/
  marketing-direction.md   # intention marketing et positionnement du site

public/             # assets statiques
```

## Parcours couverts

- demande de demonstration depuis la section `Contact` ;
- prise de contact directe via WhatsApp ;
- inscription / demande de demo legere depuis la section `Download` ;
- redirection vers l'application via `https://app.sunufarm.com`.

## Positionnement de la landing

La landing actuelle est pensee pour etre plus orientee conversion que le template initial :

- hero axe sur les resultats : pertes, rentabilite, pilotage ;
- problemes et valeur formules de maniere plus concrete et business ;
- offre `Pro` mise en avant comme formule recommandee ;
- preuves produit visuelles via une grande section screenshots inspiree des ecrans reels de l'application ;
- marqueurs de credibilite : usage terrain, simplicite, adaptation a l'Afrique francophone.

## Notes de contenu

Le positionnement marketing du site est documente dans [docs/marketing-direction.md](./docs/marketing-direction.md). Le ton du site doit rester simple, concret, credible et oriente resultat plutot que liste brute de fonctionnalites.
