/**
 * Get Tailwind CSS as a string for inlining in HTML
 * This avoids using the CDN in production
 *
 * This reads the generated Tailwind CSS file that includes ALL utilities
 * The file is generated at build time by scripts/generate-tailwind-standalone.mjs
 */

import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let cachedCSS: string | null = null;

export function getTailwindCSS(): string {
  // Cache the CSS to avoid reading from disk on every request
  if (cachedCSS !== null) {
    return cachedCSS;
  }

  try {
    // Try to read the generated standalone CSS file
    const cssPath = join(__dirname, "tailwind-standalone.css");
    cachedCSS = readFileSync(cssPath, "utf-8");
    return cachedCSS;
  } catch (error) {
    // Fallback: If the file doesn't exist (e.g., in dev before build),
    // return a minimal CSS that at least works
    console.warn(
      "Tailwind standalone CSS not found. Run 'pnpm run build:tailwind' to generate it.",
      error,
    );

    // Return minimal fallback CSS
    return `
/* Tailwind CSS Fallback - Run 'pnpm run build:tailwind' to generate full CSS */
*,::before,::after{box-sizing:border-box}
body{margin:0}
.flex{display:flex}
.h-full{height:100%}
.w-full{width:100%}
.items-center{align-items:center}
.justify-center{justify-content:center}
.relative{position:relative}
.absolute{position:absolute}
.rounded-full{border-radius:9999px}
.text-white{color:#fff}
.bg-white{background-color:#fff}
.bg-blue-500{background-color:#3b82f6}
.bg-green-500{background-color:#22c55e}
.bg-pink-500{background-color:#ec4899}
.border-2{border-width:2px}
.border-white{border-color:#fff}
`;
  }
}
