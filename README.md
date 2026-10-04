# English Dev Daily

App web PWA: rutina de 1h/dia de Pre-A1 a B2 con frases para la vida diaria y, en niveles altos, para devs que buscan remoto.

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

- Pre-A1 Starter: presentarte
- A1 Inicial: datos personales, familia, precios, hora
- A2 Basico: pasado, futuro, rutinas, viajes
- B1 Intermedio: opiniones, planes, explicar problemas
- B2 Avanzado: argumentar, condicionales, expresiones idiomaticas

La app no certifica. Al completar cada nivel sugiere validar con EF SET (gratis, A1-C2 con certificado).
