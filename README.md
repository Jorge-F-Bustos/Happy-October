# Happy October

Experiencia romántica interactiva con una calabaza cerrada que, al tocarla, abre su tapa y hace crecer un ramo de flores mágicas de Halloween desde su interior.

## Cómo abrirlo

Abre `index.html` en un navegador moderno. También puedes servir la carpeta con `npx serve happy-october` para probarla desde un servidor local. El audio está en `cancion.mp3`, en la raíz del proyecto, y se carga con la ruta relativa `./cancion.mp3` para que también funcione al publicarlo con GitHub Pages.

## Interacción

La calabaza es un botón accesible: funciona con clic, toque y teclado. Empieza completamente cerrada; no hay flores visibles ni apertura automática. Al activarla, reacciona, aumenta la luz interior, levanta físicamente la tapa y crea las flores de forma escalonada desde el hueco.

## Personalización

Todas las opciones editables están al principio de `script.js` y los comentarios están en español:

- `calabaza.tamano` cambia el tamaño de la calabaza.
- `posicionCalabaza`, `posicionTextoSuperior` y `posicionNota` mueven los elementos. X positivo va a la derecha y Y positivo hacia abajo.
- `flores.cantidad`, `flores.tamano`, `flores.altura`, `flores.velocidadFloracion`, `flores.variacion` y `separacionFlores.x` controlan el ramo.
- `coloresFlores` contiene los colores sólidos de pétalos y centros.
- `textoSuperior` y `textoNota` cambian los textos.
- `animacion` ajusta velocidad general, brillos y cantidad de partículas.

## Música

En la sección `CONFIGURACIÓN DE AUDIO` puedes cambiar `archivoCancion`, `volumenCancion`. El volumen está configurado en `0.7` (70%). La música no suena al cargar la página: se reproduce justo al presionar la calabaza, porque los navegadores bloquean el audio automático y solo aceptan la reproducción dentro de una interacción real del usuario. El botón pequeño de la esquina permite pausar o activar la música.

## Diseño y accesibilidad

La calabaza y sus cortes son SVG, mientras que las flores son elementos ligeros con CSS para mantener el rendimiento. El diseño es responsive y evita el desplazamiento horizontal en móviles. La calabaza tiene etiqueta accesible, foco visible, contraste alto y soporte táctil. `prefers-reduced-motion` reduce las animaciones sin ocultar la sorpresa ni el contenido importante.

## Ajustes responsive

Las reglas de móvil, orientación horizontal y movimiento reducido están al final de `style.css`. Si necesitas más espacio para las flores en una pantalla concreta, ajusta `flores.altura`, `flores.tamano` o la altura de `.magic-stage` dentro de esas media queries.
