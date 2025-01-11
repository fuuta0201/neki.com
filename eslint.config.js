import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist"], // 出力ディレクトリを無視
  },
  {
    files: ["**/*.{ts,tsx}"], // TypeScript/TSXファイルを対象
    languageOptions: {
      ecmaVersion: 2020, // ECMAScriptバージョン
      globals: globals.browser,
      parser: tsParser, // TypeScript用パーサー
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn"], // 未使用変数の警告
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": ["warn"], // Prettierの警告
    },
  },
];
