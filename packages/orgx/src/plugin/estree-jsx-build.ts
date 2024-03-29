import buildJsx from 'estree-util-build-jsx'
import type { Plugin, Settings } from 'unified'
import specifiersToObjectPattern from '../estree/specifiers-to-object-pattern'

export interface Options extends Settings {
  outputFormat: 'program' | 'function-body'
}

export const estreeJsxBuild: Plugin = (options: Options) => {
  const { outputFormat } = options

  return (tree) => {
    buildJsx(tree)

    // When compiling to a function body, replace the import that was just
    // generated, and get `jsx`, `jsxs`, and `Fragment` from `arguments[0]`
    // instead.
    if (
      outputFormat === 'function-body' &&
      tree.body[0] &&
      tree.body[0].type === 'ImportDeclaration' &&
      typeof tree.body[0].source.value === 'string' &&
      /\/jsx-runtime$/.test(tree.body[0].source.value)
    ) {
      tree.body[0] = {
        type: 'VariableDeclaration',
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: specifiersToObjectPattern(tree.body[0].specifiers),
            init: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'arguments' },
              property: { type: 'Literal', value: 0 },
              computed: true,
              optional: false,
            },
          },
        ],
      }
    }
  }
}
