import type { ConfigGroupFn, LinterConfig } from '../core/types'

import jsdocPlugin from 'eslint-plugin-jsdoc'

/**
 * JSDoc configuration
 *
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 */
export const jsdoc: ConfigGroupFn<'jsdoc'> = async (opts, ctx) => {
	const { onFinalize = (v) => v } = opts

	const items: LinterConfig[] = [
		{
			name: 'gicho/jsdoc',
			plugins: {
				jsdoc: jsdocPlugin,
			},
			rules: {
				// ref: https://github.com/gajus/eslint-plugin-jsdoc/blob/main/src/index.js

				// ✅ Checks that `@access` tags have a valid value.
				'jsdoc/check-access': 'warn',
				// ✅🔧 Reports invalid alignment of JSDoc block asterisks.
				'jsdoc/check-alignment': 'warn',
				// Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
				// 'jsdoc/check-examples': 'warn',
				// Reports invalid padding inside JSDoc blocks.
				// 'jsdoc/check-indentation': 'warn',
				// 🔧 Reports invalid alignment of JSDoc block lines.
				// 'jsdoc/check-line-alignment': 'warn',
				// ✅🔧 Ensures that parameter names in JSDoc match those in the function declaration.
				'jsdoc/check-param-names': 'warn',
				// ✅🔧 Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
				'jsdoc/check-property-names': 'warn',
				// Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
				// 'jsdoc/check-syntax': 'warn',
				// ✅🔧 Reports invalid block tag names.
				// 'jsdoc/check-tag-names': 'warn',
				// Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
				// 'jsdoc/check-template-names': 'warn',
				// ✅🔧 Reports invalid types.
				'jsdoc/check-types': 'warn',
				// ✅ This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
				// 'jsdoc/check-values': 'warn',
				// 🔧 Converts non-JSDoc comments preceding or following nodes into JSDoc ones
				// 'jsdoc/convert-to-jsdoc-comments': 'warn',
				// ✅🔧 Expects specific tags to be empty of any content.
				// 'jsdoc/empty-tags': 'warn',
				// ✅ Reports an issue with any non-constructor function using `@implements`.
				'jsdoc/implements-on-classes': 'warn',
				// Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
				// 'jsdoc/imports-as-dependencies': 'warn',
				// This rule reports doc comments that only restate their attached name.
				// 'jsdoc/informative-docs': 'warn',
				// 🔧 Enforces minimum number of newlines before JSDoc comment blocks
				// 'jsdoc/lines-before-block': 'warn',
				// Enforces a regular expression pattern on descriptions.
				// 'jsdoc/match-description': 'warn',
				// 🔧 Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
				// 'jsdoc/match-name': 'warn',
				// ✅🔧 Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
				'jsdoc/multiline-blocks': 'warn',
				// 🔧 This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
				// 'jsdoc/no-bad-blocks': 'warn',
				// 🔧 Detects and removes extra lines of a blank block description
				'jsdoc/no-blank-block-descriptions': 'warn',
				// 🔧 Removes empty blocks with nothing but possibly line breaks
				'jsdoc/no-blank-blocks': 'warn',
				// ✅🔧 This rule reports defaults being used on the relevant portion of `@param` or `@default`.
				'jsdoc/no-defaults': 'warn',
				// 🔧 Reports when certain comment structures are always expected.
				// 'jsdoc/no-missing-syntax': 'warn',
				// ✅🔧 Prevents use of multiple asterisks at the beginning of lines.
				'jsdoc/no-multi-asterisks': 'warn',
				// 🔧 Reports when certain comment structures are present.
				// 'jsdoc/no-restricted-syntax': 'warn',
				// 🔧 This rule reports types being used on `@param` or `@returns`.
				// 'jsdoc/no-types': 'warn',
				// Checks that types in jsdoc comments are defined.
				// 'jsdoc/no-undefined-types': 'warn',
				// 🔧 Requires that each JSDoc line starts with an `*`.
				'jsdoc/require-asterisk-prefix': 'warn',
				// Requires that all functions have a description.
				// 'jsdoc/require-description': 'warn',
				// 🔧 Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
				// 'jsdoc/require-description-complete-sentence': 'warn',
				// 🔧 Requires that all functions have examples.
				// 'jsdoc/require-example': 'warn',
				// Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
				// 'jsdoc/require-file-overview': 'warn',
				// 🔧 Requires a hyphen before the `@param` description.
				// 'jsdoc/require-hyphen-before-param-description': 'warn',
				// ✅🔧 Require JSDoc comments
				// 'jsdoc/require-jsdoc': 'warn',
				// ✅🔧 Requires that all function parameters are documented.
				// 'jsdoc/require-param': 'warn',
				// ✅🔧 Requires that each `@param` tag has a `description` value.
				// 'jsdoc/require-param-description': 'warn',
				// ✅Requires that all function parameters have names.
				'jsdoc/require-param-name': 'warn',
				// ✅🔧 Requires that each `@param` tag has a `type` value.
				// 'jsdoc/require-param-type': 'warn',
				// ✅🔧 Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
				'jsdoc/require-property': 'warn',
				// ✅ Requires that each `@property` tag has a `description` value.
				'jsdoc/require-property-description': 'warn',
				// ✅ Requires that all function `@property` tags have names.
				'jsdoc/require-property-name': 'warn',
				// ✅ Requires that each `@property` tag has a `type` value.
				// 'jsdoc/require-property-type': 'warn',
				// ✅🔧 Requires that returns are documented.
				// 'jsdoc/require-returns': 'warn',
				// ✅ Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
				'jsdoc/require-returns-check': 'warn',
				// ✅ Requires that the `@returns` tag has a `description` value.
				'jsdoc/require-returns-description': 'warn',
				// ✅ Requires that `@returns` tag has `type` value.
				// 'jsdoc/require-returns-type': 'warn',
				// Requires template tags for each generic type parameter
				// 'jsdoc/require-template': 'warn',
				// Requires that throw statements are documented.
				// 'jsdoc/require-throws': 'warn',
				// ✅ Requires yields are documented.
				// 'jsdoc/require-yields': 'warn',
				// ✅ Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
				'jsdoc/require-yields-check': 'warn',
				// 🔧 Sorts tags by a specified sequence according to tag name.
				// 'jsdoc/sort-tags': 'warn',
				// ✅🔧 Enforces lines (or no lines) between tags.
				// 'jsdoc/tag-lines': 'warn',
				// 🔧 Auto-escape certain characters that are input within block and tag descriptions.
				// 'jsdoc/text-escaping': 'warn',
				// ✅ Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
				// 'jsdoc/valid-types': 'warn',

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
