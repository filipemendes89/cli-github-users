module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "quotes": ["error", "single"],
    "no-irregular-whitespace": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "arrow-spacing": "error",
    "comma-style": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "semi": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "no-sparse-arrays": "error",
    "func-call-spacing": ["error","never"],
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "space-before-blocks": ["error","always"],
    "template-curly-spacing": "error",
    "no-template-curly-in-string": "error",
    "curly": ["error", "multi-or-nest"],
    "object-curly-spacing": ["error", "always"],
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-empty-pattern": "error",
    "no-multiple-empty-lines": "error",
    "no-unexpected-multiline": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "func-style": ["error", "expression"],
    "id-length": ["error", { "min": 2 }],
    "indent": ["error", 2],
    "camelcase": "error",
    "max-depth": ["error", 3],
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-new-func": "error",
    "no-eq-null": "error",
    "no-var": "error",
    "no-useless-rename": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    "yoda": "error",
    "prefer-object-spread": "error",
    "max-len": ["error", { "code": 100, "tabWidth": 2, "ignoreComments": true, "ignoreUrls": true, "ignoreStrings": true,  "ignoreTemplateLiterals": true }]
 }
}