# Unsere Liebesgeschichte — Seite für Traurednerin Theresa

Eine einzige statische Seite mit unserer kompletten Geschichte und den Antworten auf
Theresas Fragenkatalog. Angelegt 19.08.2026.

**Live:** https://carina-depner.github.io/lc-0509/
**Passwort:** `Eierbecher-Tequila-2026`

## Warum verschlüsselt

GitHub Pages kann nur aus einem öffentlichen Repo ausliefern. Auf der Seite stehen aber
sehr persönliche Dinge (Papas Tod, Carinas Depression, Namen von Freunden). Deshalb liegt
im Repo **kein Klartext**: `bau.js` verschlüsselt den kompletten Seiteninhalt mit
**AES-256-GCM**, der Schlüssel kommt per **PBKDF2 (250.000 Runden, SHA-256)** aus dem
Passwort. Erst im Browser wird entschlüsselt. Ohne Passwort steht auch im Quelltext nur
Zeichensalat.

## Wie es gebaut wird

Inhaltliche Quelle ist **das Gehirn**, nicht diese Datei:
`../cl-gehirn/gehirn/privat/liebesgeschichte.md`

```bash
node bau.js
```

Erzeugt:

| Datei | Zweck |
|---|---|
| `index.html` | Die verschlüsselte Fassung — die geht online |
| `ansicht-lokal.html` | Klartext zum Selberlesen und für ein PDF. **Steht in der .gitignore** |

`bau.js` filtert dabei automatisch alles heraus, was nur uns angeht: die interne Liste
„Noch zu klären" und alle Rückfragen an uns selbst („bitte bestätigen", „Schreibweise?").
Hinweise, die mit `⚠️ **` beginnen, bleiben stehen — die richten sich an Theresa.

## Ändern

Text immer **im Gehirn** ändern, dann `node bau.js`, dann committen und pushen.
GitHub Pages veröffentlicht innerhalb einer Minute.

Passwort ändern: oben in `bau.js` bei `PASSWORT`, dann neu bauen und pushen.

## Lokal anschauen

```bash
node server.js
```

Dann http://localhost:4321 — nötig, weil die Entschlüsselung im Browser `https` oder
`localhost` braucht und über `file://` nicht funktioniert.
