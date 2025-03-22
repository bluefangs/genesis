import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Custom rules to enforce Genesis project standards
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // File Organization
      "max-lines": ["error", { "max": 350, "skipBlankLines": true, "skipComments": true }],
      
      // Naming Conventions
      "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true }],
      "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
      
      // Component Structure
      "react/jsx-sort-props": ["warn"],
      "react/jsx-pascal-case": ["error"],
      
      // Code Quality
      "complexity": ["warn", 15],
      "max-depth": ["warn", 4],
      "max-nested-callbacks": ["warn", 3],
      "max-params": ["warn", 4],
      
      // Anti-patterns
      "no-nested-ternary": ["error"],
      "no-unneeded-ternary": ["error"],
      "no-param-reassign": ["error"],
      
      // Error Handling
      "no-console": ["warn"],
      "prefer-promise-reject-errors": ["error"],
      
      // Documentation
      "jsdoc/require-jsdoc": ["warn", {
        "publicOnly": true,
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        }
      }],
      "jsdoc/require-description": ["warn"],
      "jsdoc/require-param": ["warn"],
      "jsdoc/require-param-description": ["warn"],
      "jsdoc/require-returns": ["warn"],
      "jsdoc/require-returns-description": ["warn"],
      
      // React Best Practices
      "react-hooks/rules-of-hooks": ["error"],
      "react-hooks/exhaustive-deps": ["warn"],
      "react/jsx-no-useless-fragment": ["warn"],
      "react/no-array-index-key": ["warn"],
      
      // Prevent prop drilling
      "react/jsx-props-no-spreading": ["warn"],
      
      // Performance
      "react/jsx-no-constructed-context-values": ["warn"],
      
      // TypeScript specific
      "@typescript-eslint/explicit-function-return-type": ["warn", { 
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true 
      }],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/naming-convention": [
        "error",
        // Enforce PascalCase for components and types
        {
          "selector": ["typeLike", "enumMember"],
          "format": ["PascalCase"]
        },
        // Enforce camelCase for vars, functions, parameters
        {
          "selector": ["variable", "function", "parameter"],
          "format": ["camelCase", "PascalCase"],
          "leadingUnderscore": "allow"
        },
        // Enforce UPPER_SNAKE_CASE for constants
        {
          "selector": "variable",
          "modifiers": ["const"],
          "format": ["camelCase", "UPPER_CASE", "PascalCase"]
        }
      ],
      
      // Import organization
      "import/order": ["warn", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }]
    }
  },
  
  // JSX-specific rules
  {
    files: ["**/*.jsx", "**/*.tsx"],
    rules: {
      "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
      "react/function-component-definition": ["error", {
        "namedComponents": "function-declaration",
        "unnamedComponents": "arrow-function"
      }]
    }
  },
  
  // Type definitions
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": false
          }
        }
      ]
    }
  },
  
  // Test files
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    rules: {
      "max-lines": "off",
      "max-nested-callbacks": "off"
    }
  }
];

export default eslintConfig;
