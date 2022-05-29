module.exports = {
  plugins: ['jsdoc', 'object-merge'],
  extends: ['standard-with-typescript', 'plugin:jsdoc/recommended'],
  ignorePatterns: ['dist', 'coverage'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    es6: true,
    jest: true
  },
  rules: {
    'prefer-template': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'jsdoc/check-tag-names': [
      'warn',
      {
        definedTags: ['export', 'hidden', 'remarks', 'internal']
      }
    ],
    '@typescript-eslint/indent': 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: false
        },
        contexts: [
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'ClassProperty',
          'FunctionDeclaration',
          'FunctionExpression',
          'MethodDefinition',
          'TSDeclareFunction',
          'TSEnumDeclaration',
          'TSInterfaceDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
          'TSModuleDeclaration',
          'TSTypeAliasDeclaration',
          'VariableDeclaration'
        ]
      }
    ],
    'jsdoc/no-undefined-types': [
      'warn',
      {
        definedTypes: ['unknown', 'never']
      }
    ],
    'object-merge/no-side-effects': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }
    ]
  }
}
