/** @type {import('tailwindcss').Config} */
export default {
  // Include all utilities by using a comprehensive safelist
  // This ensures ALL Tailwind utilities are generated, not just those used in the codebase
  safelist: [
    // Generate all color utilities
    {
      pattern:
        /^(bg|text|border|ring|outline|divide|from|via|to|fill|stroke)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    {
      pattern:
        /^(bg|text|border|ring|outline|divide|from|via|to|fill|stroke)-(transparent|current|black|white)$/,
    },
    // Generate all spacing utilities
    {
      pattern:
        /^(m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl|space-x|space-y|gap|inset|top|right|bottom|left)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px|py|pt|pr|pb|pl|px|py|pt|pr|pb|pl)$/,
    },
    // Generate all size utilities
    {
      pattern:
        /^(w|h|min-w|min-h|max-w|max-h)-(0|full|screen|min|max|fit|auto|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|1\/5|2\/5|3\/5|4\/5|1\/6|2\/6|3\/6|4\/6|5\/6|1\/12|2\/12|3\/12|4\/12|5\/12|6\/12|7\/12|8\/12|9\/12|10\/12|11\/12)$/,
    },
    // Generate all flexbox utilities
    {
      pattern:
        /^(flex|inline-flex|flex-(row|col|wrap|nowrap|wrap-reverse)|items-(start|end|center|baseline|stretch)|justify-(start|end|center|between|around|evenly)|content-(start|end|center|between|around|evenly)|self-(start|end|center|stretch))$/,
    },
    // Generate all typography utilities
    {
      pattern:
        /^(text|font|leading|tracking|antialiased|subpixel-antialiased)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|thin|extralight|light|normal|medium|semibold|bold|extrabold|black|tight|snug|normal|relaxed|loose|tighter|wide|wider|widest)$/,
    },
    // Generate all border utilities
    {
      pattern:
        /^(rounded|border|divide|outline|ring)-(none|0|2|4|8|t|r|b|l|tl|tr|bl|br|full|sm|md|lg|xl|2xl|3xl)$/,
    },
    // Generate all shadow utilities
    {
      pattern: /^(shadow|drop-shadow)-(none|sm|md|lg|xl|2xl|inner)$/,
    },
    // Generate all opacity utilities
    {
      pattern:
        /^(opacity|bg-opacity|text-opacity|border-opacity)-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
    },
    // Generate arbitrary value patterns
    {
      pattern: /^[a-z]+-\[.+\]$/,
    },
  ],
  content: [
    // Include all files that might contain Tailwind classes
    "./src/**/*.{js,jsx,ts,tsx,html}",
    // Also include a file that lists all possible utilities (for comprehensive generation)
    "./src/utils/tailwind-all-classes.txt",
  ],
};
