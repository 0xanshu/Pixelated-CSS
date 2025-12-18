#!/usr/bin/env node

/**
 * Generate a standalone Tailwind CSS file with ALL utilities
 * This script uses PostCSS to compile Tailwind CSS with all utilities included
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = join(__dirname, "../src/utils/tailwind-input.css");
const outputFile = join(__dirname, "../src/utils/tailwind-standalone.css");

console.log("Generating full Tailwind CSS...");
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);

try {
  const input = readFileSync(inputFile, "utf-8");

  // Use PostCSS with Tailwind to generate full CSS
  const result = await postcss([tailwindcss()]).process(input, {
    from: inputFile,
    to: outputFile,
  });

  writeFileSync(outputFile, result.css, "utf-8");
  console.log(`✅ Generated Tailwind CSS file: ${outputFile}`);
  console.log(`   Size: ${(result.css.length / 1024).toFixed(2)} KB`);
} catch (error) {
  console.error("❌ Error generating Tailwind CSS:", error);
  process.exit(1);
}
