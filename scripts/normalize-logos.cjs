// normalize-logos.cjs
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = path.resolve("public/logos_raw");
const outDir = path.resolve("public/logos");

// Canvas final donde todos los logos quedarán centrados
const CANVAS_W = 600;
const CANVAS_H = 200;

// Altura objetivo del logo dentro del canvas (ajustá si querés más grande/chico)
const TARGET_H = 140;

if (!fs.existsSync(srcDir)) {
  console.error("No existe la carpeta:", srcDir);
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });

async function processLogo(file) {
  const src = path.join(srcDir, file);
  const dest = path.join(outDir, file);

  // 1) Recorta transparencia sobrante
  const trimmed = sharp(src).trim();

  // 2) Redimensiona manteniendo proporción (alto = TARGET_H)
  const resized = await trimmed
    .resize({ height: TARGET_H, fit: "inside", withoutEnlargement: false })
    .toBuffer();

  // 3) Crea el canvas y centra el logo
  await sharp({
    create: {
      width: CANVAS_W,
      height: CANVAS_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(dest);

  console.log("OK:", file);
}

(async () => {
  const files = fs
    .readdirSync(srcDir)
    .filter((f) => /\.(png|webp|jpg|jpeg)$/i.test(f));

  if (!files.length) {
    console.warn("No se encontraron imágenes en", srcDir);
    process.exit(0);
  }

  for (const f of files) {
    try {
      await processLogo(f);
    } catch (e) {
      console.error("Error con", f, e.message);
    }
  }

  console.log("Listo. Archivos normalizados en:", outDir);
})();
