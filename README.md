# Su Hogar era el Fuego — sitio web

Sitio estático (HTML + CSS + JS, sin dependencias) listo para **GitHub Pages**.

## Estructura
```
index.html                      Inicio
cenas-clandestinas/index.html   Cenas Clandestinas
talleres-de-cocina/index.html   Talleres de Cocina
eventos-empresariales/index.html Eventos Empresariales
contacto/index.html             Contacto + FAQs
css/ js/ assets/                Estilos, scripts, fuentes e imágenes (WebP)
sitemap.xml robots.txt          SEO
```

## Publicar en GitHub Pages
1. Crea un repositorio y sube todo el contenido de esta carpeta a la raíz (`main`).
2. *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`*.
3. Reemplaza el dominio de ejemplo (canonical, Open Graph, sitemap y datos estructurados):
   ```bash
   ./reemplazar-dominio.sh https://TU-USUARIO.github.io/NOMBRE-REPO   # o tu dominio propio
   ```
4. Dominio propio: crea un archivo `CNAME` con el dominio y configura el DNS.
5. Registra el sitio en **Google Search Console** y envía `https://TU-DOMINIO/sitemap.xml`.
6. Crea/verifica la ficha de **Google Business Profile** (Bogotá) y enlázala.

## Tipografías y colores
- Títulos: **Lexend Giga** (alternativa libre muy cercana a Horizon). Texto: **Questrial**.
- Para usar Horizon real (licencia comercial): copia `horizon.woff2` a `assets/fonts/`, descomenta el bloque `@font-face` al inicio de `css/styles.css` y antepón `"Horizon"` a la variable `--display`.
- Colores en `css/styles.css` (`:root`): rojo `#d1372e`, azul `#24394e`, cobalto `#004aad`.

## SEO y GEO (buscadores y asistentes de IA)
- `robots.txt` permite a Google, Bing y a los rastreadores de IA (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended…).
- `llms.txt` y `llms-full.txt`: resumen y documento completo para modelos de lenguaje.
- `sitemap.xml` con imágenes. Datos estructurados (LocalBusiness/FoodEstablishment, Service, FAQPage, ItemList, Person, BreadcrumbList).
- Cada página tiene "Resumen rápido" y preguntas frecuentes con respuestas autosuficientes.
- `vercel.json`: caché larga para imágenes y fuentes.
- Tras publicar: ejecuta `./reemplazar-dominio.sh https://tu-dominio.com` (también actualiza llms.txt y robots.txt).

## Pendientes de contenido
- Página del tour de plaza: borrador; confirma duración, valor, punto de encuentro y fechas, y agrega fotos de la plaza.
- Más reseñas de Google Maps: copia el bloque `<figure class="review">` en `index.html` (sección Reseñas) por cada una.
- Código de Google Analytics / Tag Manager (comentario en el `<head>`).
