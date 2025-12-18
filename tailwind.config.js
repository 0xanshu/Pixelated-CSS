// Tailwind v4 configuration
// In Tailwind v4, the config format is simplified
// All utilities are generated based on content scanning
// The tailwind-all-classes.txt file ensures comprehensive utility generation

export default {
  content: [
    // Include all files that might contain Tailwind classes
    "./src/**/*.{js,jsx,ts,tsx,html}",
    // Include the comprehensive classes file to ensure all utilities are generated
    "./src/utils/tailwind-all-classes.txt",
  ],
};
