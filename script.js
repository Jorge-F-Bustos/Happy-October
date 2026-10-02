/*
 * ==========================================
 * CONFIGURACIÓN DE LA EXPERIENCIA
 * ==========================================
 */

// ==========================================
// CONFIGURACIÓN DE AUDIO
// ==========================================
// Ruta de la canción medida desde la raíz del proyecto, junto a index.html.
// Se mantiene como ruta relativa ("./") a propósito: así también funciona
// cuando GitHub Pages publica el proyecto dentro de un subdirectorio del repo.
const archivoCancion = "./cancion.mp3";
// Volumen de la música: 0.7 = 70%.
const volumenCancion = 0.7;

// ==========================================
// CONFIGURACIÓN DE LA CALABAZA Y LAS FLORES
// ==========================================
const calabaza = { tamano: "clamp(270px, 58vw, 480px)", ancho: 1.12, intensidadLuz: 1, velocidadTapa: 1 };
const flores = { cantidad: 16, tamano: 64, altura: 320, velocidadCrecimiento: 1, velocidadFloracion: 1, variacion: 1, separacion: 1 };
const coloresFlores = [
  { petalo: "#24152d", centro: "#f18a27" }, { petalo: "#e8751c", centro: "#21101d" },
  { petalo: "#71379a", centro: "#ffc15c" }, { petalo: "#fff6df", centro: "#24152d" },
  { petalo: "#17111e", centro: "#e8751c" }, { petalo: "#a94bb2", centro: "#21101d" },
  { petalo: "#f18a27", centro: "#fff6df" }, { petalo: "#fff6df", centro: "#d94c96" },
  // Naranja cálido para las dos flores que antes eran blancas.
  { petalo: "#e8751c", centro: "#fff6df" },
  // Flor central especial: reparte la paleta completa del ramo en sus pétalos.
  { petalo: "#2a1533", centro: "#ffc15c", cup: "#1a0c2b", especial: ["#3b1d5c", "#241041", "#180a26", "#2a1533"] },
  // Flores especiales laterales: mismo diseño que la central. La izquierda usa
  // tonos lavanda claros y la derecha tonos morados medios.
  { petalo: "#c9a9ec", centro: "#fff6df", cup: "#b18fdc", especial: ["#dcc9f7", "#c9a9ec", "#b18fdc", "#e6d8fa"] },
  { petalo: "#7a3f96", centro: "#ffc15c", cup: "#43194f", especial: ["#7a3f96", "#5e2a7a", "#43194f", "#8c4fa8"] },
  // Flores especiales de los extremos: mismo diseño y mismo tamaño pequeño.
  // La del extremo izquierdo usa un naranja pálido cálido y la del extremo
  // derecho un violeta ciruela medio. Sin tallo ni hojas.
  { petalo: "#e8a06a", centro: "#fff6df", cup: "#b06a3a", especial: ["#f0bd8d", "#e8a06a", "#d1864c", "#f7d3ac"] },
  { petalo: "#6b2d5c", centro: "#ffc15c", cup: "#3d1a35", especial: ["#6b2d5c", "#54224a", "#3d1a35", "#7d3a6c"] }
];

// ==========================================
// CONFIGURACIÓN FIJA DE LAS FLORES
// ==========================================
// Cada entrada genera un grupo completo e inseparable: flor + tallo + hojas.
// x positivo mueve a la derecha y x negativo a la izquierda.
// y positivo baja el grupo dentro del recipiente y y negativo lo sube.
// tamano define el ancho de la flor y altura hasta dónde sube el tallo.
// rotacion inclina todo el grupo; inclinacion es su balanceo suave.
// longitudTallo es la proporción mínima del tallo visible.
const longitudTallo = .82;
// Altura global de todas las flores: un solo valor mueve el ramo completo.
// Usa valores NEGATIVOS para subir las flores (menos cerca del borde inferior).
// Usa valores POSITIVOS para bajar las flores.
// No altera la X, el tamaño, el tallo, las hojas ni las animaciones.
const desplazamientoVerticalFlores = -46;
const configuracionFlores = [
  { x: -92, y: 20, tamano: .78, altura: .78, rotacion: -8, retraso: .08, color: 4, balanceo: -2, inclinacion: -2 },
  { x: -84, y: 0, tamano: .94, altura: .92, rotacion: 6, retraso: .24, color: 1, balanceo: 2, inclinacion: 3 },
  { x: -46, y: -18, tamano: 1.08, altura: .95, rotacion: -4, retraso: .42, color: 8, balanceo: -2, inclinacion: -3 },
  { x: 0, y: -30, tamano: .86, altura: 1, rotacion: 7, retraso: .6, color: 6, balanceo: 2, inclinacion: 2 },
  { x: 48, y: -12, tamano: .98, altura: .86, rotacion: -6, retraso: .78, color: 2, balanceo: -2, inclinacion: 3 },
  { x: 88, y: 18, tamano: .74, altura: .76, rotacion: 5, retraso: .96, color: 0, balanceo: 2, inclinacion: -2 },
  { x: -72, y: -34, tamano: .7, altura: .74, rotacion: 4, retraso: 1.1, color: 7, balanceo: -2, inclinacion: 2 },
  { x: -60, y: -48, tamano: .8, altura: .88, rotacion: -7, retraso: 1.26, color: 5, balanceo: 2, inclinacion: -3 },
  { x: 58, y: -42, tamano: .76, altura: .84, rotacion: 5, retraso: 1.42, color: 4, balanceo: -2, inclinacion: 2 },
  { x: 66, y: -25, tamano: .68, altura: .72, rotacion: -4, retraso: 1.58, color: 8, balanceo: 2, inclinacion: -2 },
  { x: 10, y: -50, tamano: .82, altura: .92, rotacion: -2, retraso: 1.74, color: 7, balanceo: 1, inclinacion: 2 },
  // Flor central especial:	x en cero la centra con la calabaza y su altura
  // corta la deja delante de la flor central alta, sin tapar las vecinas.
  { x: 0, y: 2, tamano: 1.1, altura: .58, rotacion: 0, retraso: 1.9, color: 9, balanceo: 1, inclinacion: 0, central: true },
  // Flor especial izquierda: mismo diseño que la central, más pequeña y en un
  // tono claro lavanda. Sin tallo ni hojas. Queda detrás de la central.
  { x: -76, y: 16, tamano: .72, altura: .58, rotacion: 5, retraso: 1.82, color: 10, balanceo: 1, inclinacion: 2, lateral: true },
  // Flor especial derecha: mismo diseño, tamaño reducido y tono medio oscuro
  // morado. Sin tallo ni hojas. Queda detrás de la central.
  { x: 76, y: 12, tamano: .72, altura: .58, rotacion: -4, retraso: 1.98, color: 11, balanceo: -1, inclinacion: -2, lateral: true },
  // Flor especial del extremo izquierdo: fijo en X -132, un poco más bajo,
  // mismo tamaño pequeño y tono naranja pálido. Sin tallo ni hojas.
  { x: -132, y: 22, tamano: .72, altura: .58, rotacion: 7, retraso: 1.74, color: 12, balanceo: -1, inclinacion: -3, lateral: true },
  // Flor especial del extremo derecho: fijo en X 132, simétrica a la anterior,
  // mismo tamaño pequeño y tono violeta ciruela medio. Sin tallo ni hojas.
  { x: 132, y: 18, tamano: .72, altura: .58, rotacion: -6, retraso: 2.14, color: 13, balanceo: 1, inclinacion: 3, lateral: true }
];
// Límites horizontales de seguridad dentro del recipiente.
// Mantienen las flores y sus hojas lejos de los bordes izquierdo y derecho.
// El margen sigue cubriendo a todas las flores normales (la más extrema está
// en x = 92); se abre para que las dos flores especiales de los extremos
// puedan ocupar su sitio sin ser recortadas.
const limitesFlores = { izquierdo: -140, derecho: 140 };

// ==========================================
// TEXTOS EDITABLES
// ==========================================
const textoSuperior = "♡~FELIZ OCTUBRE (㇏^.ˬˬ.^ノ)~♡";
const textoNota = "Espero que este mes sea muy bonito y esté llenito de cosas lindas, de muchas pelis de terror, jueguitos robloxianos, dibujitos, momentos juntitos y muchas cositas que te gusten :3. Espero que podamos disfrutar muchísimo este octubre y llenarlo de recuerdos bonitos juntos.\n\nNi la noche más oscura de Halloween podría apagar todo lo que siento por ti. \n\nPor un octubre muy bonito a tu lado, amorcito.";

// ==========================================
// POSICIÓN DE ELEMENTOS
// ==========================================
// X positivo mueve a la derecha. Y positivo mueve hacia abajo.
const posicionCalabaza = { x: 0, y: 0 };
const posicionTextoSuperior = { x: 0, y: 0 };
// Desplazamiento responsive de la calabaza y las flores como una sola composición.
const posicionComposicionHalloween = { x: 0, y: "clamp(16px, 4vh, 34px)" };
// Desplazamiento independiente de la nota. Y positivo baja la nota.
const posicionNotaHalloween = { x: 0, y: "clamp(10px, 2.2vh, 20px)" };
const separacionFlores = { x: 1, y: 0 };

// ==========================================
// ANIMACIÓN Y EFECTOS
// ==========================================
const animacion = { velocidadGeneral: 1, intensidadBrillos: 1, intensidadChispas: 1, cantidadParticulas: 24 };

(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const raiz = document.documentElement;
  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const boton = $("pumpkinButton");
  const escena = $("night");
  const ramo = $("bouquet");
  const audio = $("song");
  const controlSonido = $("soundControl");
  const anuncio = $("announcement");
  const escenario = document.querySelector(".magic-stage");
  const titulo = document.querySelector(".intro h1");
  const nota = document.querySelector(".love-note p");

  titulo.textContent = textoSuperior;
  nota.textContent = textoNota;
  // El desplazamiento global se aplica al ramo entero, así flor, tallo y
  // hojas se mueven juntos sin tocar la configuración fija de cada flor.
  ramo.style.translate = `0 ${desplazamientoVerticalFlores}px`;
  boton.style.width = calabaza.tamano;
  boton.style.setProperty("--pumpkin-width", String(calabaza.ancho));
  // El interior oscuro comparte la caja de la calabaza para quedar detrás del ramo.
  const capaOscura = document.querySelector(".pumpkin-dark-layer");
  if (capaOscura) {
    capaOscura.style.width = calabaza.tamano;
    capaOscura.style.setProperty("--pumpkin-width", String(calabaza.ancho));
  }
  // Capa gemela del ramo que solo hospeda la flor central especial. Comparte la
  // clase .bouquet, así hereda exactamente la misma geometría, los mismos
  // media queries y el mismo desplazamiento global: la flor no se mueve ni un
  // píxel. Lo único que cambia es su z-index, que la deja por delante de la
  // calabaza sin tocar el resto del ramo ni la propia calabaza.
  const capaFlorCentral = document.createElement("div");
  capaFlorCentral.className = "bouquet bouquet-delante";
  capaFlorCentral.setAttribute("aria-hidden", "true");
  escenario.appendChild(capaFlorCentral);
  capaFlorCentral.style.translate = ramo.style.translate;
  boton.style.setProperty("--pos-x", `${posicionCalabaza.x}px`);
  boton.style.setProperty("--pos-y", `${posicionCalabaza.y}px`);
  escenario.style.translate = `${posicionComposicionHalloween.x}px ${posicionComposicionHalloween.y}`;
  document.querySelector(".intro").style.transform = `translate(${posicionTextoSuperior.x}px, ${posicionTextoSuperior.y}px)`;
  document.querySelector(".love-note").style.translate = `${posicionNotaHalloween.x}px ${posicionNotaHalloween.y}`;
  raiz.style.setProperty("--speed", String(Math.max(.25, animacion.velocidadGeneral)));

  // Un solo elemento <audio>: la ruta y el volumen salen de la configuración
  // de arriba. preload="auto" (en el HTML) solo prepara el archivo; no reproduce.
  audio.src = archivoCancion;
  audio.volume = Math.min(1, Math.max(0, volumenCancion));
  let audioIntentado = false;
  function reproducirMusica() {
    if (audioIntentado) return;
    audioIntentado = true;
    audio.currentTime = 0;
    // play() se llama directamente desde el gesto del usuario (la calabaza),
    // sin setTimeout ni intermédiaire que pierda el contexto del gesto.
    const promesa = audio.play();
    if (promesa && typeof promesa.catch === "function") {
      promesa.catch((error) => {
        // Si el navegador lo rechaza, se reintenta en la próxima interacción.
        audioIntentado = false;
        console.warn("No se pudo reproducir cancion.mp3:", error);
      });
    }
  }
  function activarMusica() { reproducirMusica(); }
  controlSonido.addEventListener("click", () => {
    if (audio.paused) { reproducirMusica(); controlSonido.firstChild.textContent = "♫ "; }
    else { audio.pause(); controlSonido.firstChild.textContent = "♪ "; }
  });

  function crearParticulas() {
    const fragmento = document.createDocumentFragment();
    const cantidad = reducido ? Math.ceil(animacion.cantidadParticulas * .35) : animacion.cantidadParticulas;
    for (let i = 0; i < cantidad; i += 1) {
      const particula = document.createElement("i");
      particula.className = "particle";
      particula.style.left = `${Math.random() * 100}%`;
      particula.style.top = `${Math.random() * 78}%`;
      particula.style.setProperty("--size", `${2 + Math.random() * 4}px`);
      particula.style.setProperty("--color", ["#fff6df", "#e8751c", "#ba77dc"][i % 3]);
      particula.style.setProperty("--duration", `${4 + Math.random() * 5}s`);
      particula.style.setProperty("--delay", `${-Math.random() * 6}s`);
      particula.style.setProperty("--drift", `${-18 + Math.random() * 36}px`);
      fragmento.appendChild(particula);
    }
    $("particles").appendChild(fragmento);
  }

  function crearFlores() {
    const total = Math.min(Math.max(5, Math.round(flores.cantidad)), configuracionFlores.length);
    for (let i = 0; i < total; i += 1) {
      const flor = document.createElement("span");
      const configuracion = configuracionFlores[i];
      const color = coloresFlores[configuracion.color % coloresFlores.length];
      flor.className = `flower${configuracion.central ? " flower-central" : ""}${configuracion.lateral ? " flower-lateral" : ""}`;
      const posicionX = Math.max(limitesFlores.izquierdo, Math.min(limitesFlores.derecho, configuracion.x * separacionFlores.x));
      flor.style.setProperty("--x", `${posicionX}px`);
      flor.style.setProperty("--flower-y", `${configuracion.y}px`);
      flor.style.setProperty("--flower-size", `${flores.tamano * configuracion.tamano}px`);
      flor.style.setProperty("--box-height", `${flores.altura * configuracion.altura}px`);
      flor.style.setProperty("--stem-length", String(longitudTallo));
      flor.style.setProperty("--petal", color.petalo);
      flor.style.setProperty("--center", color.centro);
      // La flor central reparte la paleta del ramo entre sus ocho pétalos.
      if (color.especial) {
        color.especial.forEach((tono, indice) => {
          flor.style.setProperty(`--petal-${indice + 1}`, tono);
        });
        flor.style.setProperty("--cup", color.cup);
      }
      flor.style.setProperty("--rotate", `${configuracion.rotacion}deg`);
      flor.style.setProperty("--stem-lean", `${configuracion.inclinacion}deg`);
      flor.style.setProperty("--delay", `${configuracion.retraso / Math.max(.25, flores.velocidadCrecimiento)}s`);
      flor.style.setProperty("--growth-duration", `${1.35 / Math.max(.25, flores.velocidadCrecimiento)}s`);
      flor.style.setProperty("--bloom-duration", `${.8 / Math.max(.25, flores.velocidadFloracion)}s`);
      flor.style.setProperty("--sway", `${configuracion.balanceo}px`);
      flor.style.setProperty("--lean", `${configuracion.inclinacion}deg`);
      // La flor central especial no lleva tallo ni hojas: solo el capullo.
// El resto de flores conservan el grupo completo (flor + tallo + hojas).
// Las tres flores especiales (centro, izquierda y derecha) no llevan tallo
      // ni hojas: solo el capullo. El resto de flores conservan el grupo completo.
      const talloFlor = (configuracion.central || configuracion.lateral ? "" : '<span class="stem"><i class="leaf leaf-left"></i><i class="leaf leaf-right"></i></span>');
flor.innerHTML = talloFlor + '<span class="flower-head"><i class="petal petal-1"></i><i class="petal petal-2"></i><i class="petal petal-3"></i><i class="petal petal-4"></i><i class="petal petal-5"></i><i class="petal petal-6"></i><i class="petal petal-7"></i><i class="petal petal-8"></i><span class="flower-cup"></span><span class="flower-center"><i></i><i></i><i></i><i></i><i></i></span></span>';
      // Las tres flores especiales van a la capa delantera para quedar sobre la
      // calabaza; las demás flores se quedan en el ramo, sin cambios.
      (configuracion.central || configuracion.lateral ? capaFlorCentral : ramo).appendChild(flor);
    }
  }
  crearParticulas();

  let abierto = false;
  function abrirCalabaza() {
    if (abierto) return;
    abierto = true;
    activarMusica();
    boton.disabled = true;
    boton.setAttribute("aria-expanded", "true");
    escena.classList.add("is-opening");
    ramo.setAttribute("aria-hidden", "false");
    document.querySelector(".inner-glow").style.opacity = String(Math.min(1, .25 + .55 * calabaza.intensidadLuz));
    anuncio.textContent = "La calabaza se abre y un ramo mágico comienza a crecer.";
    crearFlores();
    window.setTimeout(() => escena.classList.add("is-open"), reducido ? 20 : 360 / Math.max(.25, calabaza.velocidadTapa));
  }
  boton.addEventListener("click", abrirCalabaza);
})();
