# Field Notes — guida rapida

Il tuo sito: appunti di lezione, divulgazione scientifica e pagina personale, collegati tra loro.

## 1. Primo avvio (una volta sola)

1. Installa [Node.js](https://nodejs.org) (versione LTS).
2. Apri il terminale nella cartella del sito ed esegui:
   ```
   npm install
   npm run dev
   ```
3. Apri http://localhost:4321 nel browser. Ogni file che salvi si aggiorna in tempo reale.

## 2. Personalizza

- **`src/site.config.ts`** → nome, frase di presentazione, email, GitHub, LinkedIn.
- **`src/pages/about.astro`** → testo della pagina "About" (cerca ✏️).
- **`astro.config.mjs`** → alla riga `site:` metti l'indirizzo finale del sito.
- Cancella o sostituisci i contenuti d'esempio (segnati con ✏️).

## 3. Scrivere

Ogni contenuto è un file `.md` in `src/content/`. Il nome del file diventa l'indirizzo
(`q-learning.md` → `/notes/q-learning/`).

### Appunto (`src/content/notes/`)
```markdown
---
title: Titolo dell'appunto
description: Una riga di riassunto
date: 2026-10-20
degree: cogsci          # cogsci oppure ai
course: Nome del corso  # raggruppa gli appunti per esame
tags: [attention, learning]
related: [notes/altro-appunto]
---

Testo in Markdown...
```

### Articolo di divulgazione (`src/content/essays/`)
Come sopra, ma senza `degree` e `course`.

### Progetto (`src/content/projects/`)
Come un articolo, più (facoltativi) `link:` e `repo:` con gli indirizzi web.

## 4. Come funzionano i collegamenti

In fondo a ogni pagina compare automaticamente la sezione **Connections**:

- **Builds on** → le pagine che hai elencato in `related`.
- **Referenced by** → le pagine che citano questa nel loro `related` (non devi scriverlo due volte).
- **Related by topic** → le pagine con tag in comune.

I **tag** creano le pagine "Topics", che uniscono le due lauree. Usa sempre gli stessi nomi
(es. sempre `attention`, mai `Attention`).

Per un link dentro al testo: `[testo del link](/notes/nome-file/)`.

## 5. Formule, codice, immagini

- Formula nel testo: `$E = mc^2$` · formula centrata: `$$ ... $$` (sintassi LaTeX).
- Codice: tre backtick seguiti dal linguaggio, es. ` ```python `.
- Immagini: mettile in `public/images/` e scrivi `![descrizione](/images/foto.png)`.
- Bozze: aggiungi `draft: true` per vederle solo in locale e non pubblicarle.

## 6. Pubblicare gratis

**Opzione A, GitHub Pages (già configurata)**
1. Crea un account GitHub e un repository chiamato `tuonomeutente.github.io`.
2. Carica i file della cartella (tutto tranne `node_modules` e `dist`).
3. Nel repository: *Settings → Pages → Source: GitHub Actions*.
4. Ogni volta che carichi modifiche, il sito si aggiorna da solo su `https://tuonomeutente.github.io`.

**Opzione B, Netlify o Vercel**
Collega il repository GitHub dal loro sito: riconoscono Astro in automatico.

**Dominio personale** (facoltativo, ~10 €/anno): si acquista da un registrar e si collega
dalle impostazioni di GitHub Pages, Netlify o Vercel.
