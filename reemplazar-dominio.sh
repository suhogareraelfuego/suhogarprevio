#!/usr/bin/env bash
# Uso: ./reemplazar-dominio.sh https://tu-dominio.com
# (o https://TU-USUARIO.github.io/NOMBRE-REPO si usas GitHub Pages sin dominio propio)
set -e
[ -z "$1" ] && { echo "Falta el dominio. Ej: ./reemplazar-dominio.sh https://suhogareraelfuego.com"; exit 1; }
NEW="${1%/}"
grep -rl "https://TU-DOMINIO.com" --include="*.html" --include="*.xml" --include="*.txt" . | while read f; do
  sed -i.bak "s#https://TU-DOMINIO.com#$NEW#g" "$f" && rm -f "$f.bak"
done
echo "Dominio actualizado a $NEW"
