# English Dev Daily

App web PWA para Carlos: rutina de 1h/dia de Pre-A1 a B2 con frases de devs para remoto USA.

## Por que web y no APK?

- La PWA se instala en el celular (Chrome > Agregar a pantalla principal), funciona sin internet y pesa menos de 100KB.
- Un APK implica Expo EAS, firma, permisos de Play y recompilar por cada frase nueva. Innecesario ahora.
- Esta web sirve como portafolio para entrevistas remotas.

## Estructura

- `index.html` interfaz en espanol
- `styles.css` estilos sin dependencias
- `app.js` niveles Pre-A1, A1, A2, B1, B2 + progreso en localStorage + voz en ingles
- `manifest.webmanifest` + `sw.js` para instalar como app
- Variables y funciones en ingles, textos al usuario en espanol

## Uso local

```bash
cd /home/carlos/Projects/english-dev-daily
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "feat: app english dev daily prea1 a b2"
gh repo create english-dev-daily --public --source=. --push
# Luego: Settings > Pages > Deploy from branch > main > / (root)
# URL: https://TU_USUARIO.github.io/english-dev-daily/
```

En el celular abre esa URL > menu > Agregar a pantalla principal.

## Niveles

- Pre-A1 Starter: presentarte (tu base actual)
- A1 Supervivencia: pedir ayuda y que repitan
- A2 Base: pasado y futuro para standup
- B1 Daily: daily completa y blockers
- B2 Entrevista: minimo empleable remoto USA
