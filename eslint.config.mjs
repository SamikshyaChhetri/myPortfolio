import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // Define custom es lint rules
    rules: {
      // Disable both base and TypeScript-specific unused vars rules
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Allow using let even when const is possible
      "prefer-const": "off",
    },
  },
];

export default eslintConfig;
