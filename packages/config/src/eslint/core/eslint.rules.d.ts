// Generated file.

import type { Linter } from 'eslint'
import type { ESLintRules } from 'eslint/rules'

export interface DefaultRules extends Linter.RulesRecord, ESLintRules {
  /**
   * Enforces explicit boolean values for boolean attributes.
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean
   */
  '@eslint-react/avoid-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * Enforces explicit `<Fragment>` components instead of the shorthand `<>` or `</>` syntax.
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment
   */
  '@eslint-react/avoid-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * Reports all class components.
   * @see https://eslint-react.xyz/docs/rules/debug-class-component
   */
  '@eslint-react/debug/class-component'?: Linter.RuleEntry<[]>
  /**
   * Reports all function components.
   * @see https://eslint-react.xyz/docs/rules/debug-function-component
   */
  '@eslint-react/debug/function-component'?: Linter.RuleEntry<[]>
  /**
   * Reports all React Hooks.
   * @see https://eslint-react.xyz/docs/rules/debug-hook
   */
  '@eslint-react/debug/hook'?: Linter.RuleEntry<[]>
  /**
   * Reports all identifiers that are initialized from React.
   * @see https://eslint-react.xyz/docs/rules/debug-is-from-react
   */
  '@eslint-react/debug/is-from-react'?: Linter.RuleEntry<[]>
  /**
   * Reports all JSX elements and fragments.
   * @see https://eslint-react.xyz/docs/rules/debug-jsx
   */
  '@eslint-react/debug/jsx'?: Linter.RuleEntry<[]>
  /**
   * Reports all React Hooks.
   * @see https://eslint-react.xyz/docs/rules/debug-hook
   */
  '@eslint-react/debug/react-hooks'?: Linter.RuleEntry<[]>
  /**
   * Disallow `children` in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  '@eslint-react/dom/no-children-in-void-dom-elements'?: Linter.RuleEntry<[]>
  /**
   * Disallow `dangerouslySetInnerHTML`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallow `dangerouslySetInnerHTML` and `children` at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow `findDOMNode`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  '@eslint-react/dom/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallow `flushSync`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  '@eslint-react/dom/no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `ReactDom.hydrate()` with `hydrateRoot()`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  '@eslint-react/dom/no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces explicit `type` attribute for `button` elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  '@eslint-react/dom/no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces explicit `sandbox` attribute for `iframe` elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  '@eslint-react/dom/no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Enforces the absence of a `namespace` in React elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-namespace
   */
  '@eslint-react/dom/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `ReactDom.render()` with `createRoot(node).render()`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  '@eslint-react/dom/no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallow the return value of `ReactDOM.render`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  '@eslint-react/dom/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  '@eslint-react/dom/no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow unknown `DOM` property.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  '@eslint-react/dom/no-unknown-property'?: Linter.RuleEntry<EslintReactDomNoUnknownProperty>
  /**
   * Enforces `sandbox` attribute for `iframe` elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  '@eslint-react/dom/no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallow `target="_blank"` without `rel="noreferrer noopener"`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  '@eslint-react/dom/no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `useFormState` with `useActionState`.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  '@eslint-react/dom/no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow `children` in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  '@eslint-react/dom/no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `forwardRef` calls on components that don't use `ref`s.
   * @see https://eslint-react.xyz/docs/rules/no-useless-forward-ref
   */
  '@eslint-react/ensure-forward-ref-using-ref'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useCallback`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  '@eslint-react/hooks-extra/ensure-use-callback-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useMemo`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct calls to the `set` function of `useState` in `useEffect`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct calls to the `set` function of `useState` in `useLayoutEffect`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  '@eslint-react/hooks-extra/no-redundant-custom-hook'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useCallback`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary usage of `useMemo`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the `use` prefix should use at least one Hook inside of it.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix
   */
  '@eslint-react/hooks-extra/no-useless-custom-hooks'?: Linter.RuleEntry<[]>
  /**
   * Enforces function calls made inside `useState` to be wrapped in an `initializer function`.
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization
   */
  '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization'?: Linter.RuleEntry<[]>
  /**
   * Enforces that the 'key' attribute is placed before the spread attribute in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-key-before-spread
   */
  '@eslint-react/jsx-key-before-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate props in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
   */
  '@eslint-react/jsx-no-duplicate-props'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'IIFE' in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-iife
   */
  '@eslint-react/jsx-no-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow undefined variables in JSX.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-undef
   */
  '@eslint-react/jsx-no-undef'?: Linter.RuleEntry<[]>
  /**
   * Marks React variables as used when JSX is used.
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-react
   */
  '@eslint-react/jsx-uses-react'?: Linter.RuleEntry<[]>
  /**
   * Marks variables used in JSX elements as used.
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-vars
   */
  '@eslint-react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Enforces naming conventions for components.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-component-name
   */
  '@eslint-react/naming-convention/component-name'?: Linter.RuleEntry<EslintReactNamingConventionComponentName>
  /**
   * Enforces context name to be a valid component name with the suffix `Context`.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  '@eslint-react/naming-convention/context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces consistent file naming conventions.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename
   */
  '@eslint-react/naming-convention/filename'?: Linter.RuleEntry<EslintReactNamingConventionFilename>
  /**
   * Enforces consistent file naming conventions.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
   */
  '@eslint-react/naming-convention/filename-extension'?: Linter.RuleEntry<EslintReactNamingConventionFilenameExtension>
  /**
   * Enforces destructuring and symmetric naming of `useState` hook value and setter.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-use-state
   */
  '@eslint-react/naming-convention/use-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow accessing `this.state` inside `setState` calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  '@eslint-react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallow an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  '@eslint-react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.count`.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  '@eslint-react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow 'Children.forEach'.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  '@eslint-react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.map`.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  '@eslint-react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.only`.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  '@eslint-react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing `children` as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  '@eslint-react/no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Children.toArray`.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  '@eslint-react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  '@eslint-react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallow `cloneElement`.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  '@eslint-react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Prevents comments from being inserted as text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  '@eslint-react/no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Disallow complex conditional rendering in JSX expressions.
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  '@eslint-react/no-complex-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Disallow complex conditional rendering in JSX expressions.
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  '@eslint-react/no-complicated-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `componentWillMount` with `UNSAFE_componentWillMount`.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  '@eslint-react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `componentWillReceiveProps` with `UNSAFE_componentWillReceiveProps`.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  '@eslint-react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `componentWillUpdate` with `UNSAFE_componentWillUpdate`.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  '@eslint-react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replace usages of `<Context.Provider>` with `<Context>`.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  '@eslint-react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallow `createRef` in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  '@eslint-react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallow `defaultProps` property in favor of ES6 default parameters.
   * @see https://eslint-react.xyz/docs/rules/no-default-props
   */
  '@eslint-react/no-default-props'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct mutation of `this.state`.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  '@eslint-react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate props in JSX elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
   */
  '@eslint-react/no-duplicate-jsx-props'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate `key` on elements in the same array or a list of `children`.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  '@eslint-react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `forwardRef` with passing `ref` as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  '@eslint-react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents `key` from not being explicitly specified (e.g. spreading `key` from objects).
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  '@eslint-react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  '@eslint-react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a `displayName` which can be used in devtools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  '@eslint-react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a `displayName` which can be used in devtools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  '@eslint-react/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallow missing `key` on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  '@eslint-react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of `captureOwnerStack`.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  '@eslint-react/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallow nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  '@eslint-react/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallow nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  '@eslint-react/no-nested-components'?: Linter.RuleEntry<[]>
  /**
   * Disallow nesting lazy component declarations inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  '@eslint-react/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallow `propTypes` in favor of TypeScript or another type-checking solution.
   * @see https://eslint-react.xyz/docs/rules/no-prop-types
   */
  '@eslint-react/no-prop-types'?: Linter.RuleEntry<[]>
  /**
   * Disallow `shouldComponentUpdate` when extending `React.PureComponent`.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  '@eslint-react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `this.setState` in `componentDidMount` outside of functions, such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  '@eslint-react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `this.setState` in `componentDidUpdate` outside of functions, such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  '@eslint-react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling `this.setState` in `componentWillUpdate` outside of functions, such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  '@eslint-react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces string refs with callback refs.
   * @see https://eslint-react.xyz/docs/rules/no-string-refs
   */
  '@eslint-react/no-string-refs'?: Linter.RuleEntry<[]>
  /**
   * Warns the usage of `UNSAFE_componentWillMount` in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  '@eslint-react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns the usage of `UNSAFE_componentWillReceiveProps` in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  '@eslint-react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns the usage of `UNSAFE_componentWillUpdate` in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  '@eslint-react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e. object literals) from being used as a value for `Context.Provider`.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  '@eslint-react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  '@eslint-react/no-unstable-default-props'?: Linter.RuleEntry<[]>
  /**
   * Warns unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  '@eslint-react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  '@eslint-react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usages of `useContext` with `use`.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  '@eslint-react/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `forwardRef` calls on components that don't use `ref`s.
   * @see https://eslint-react.xyz/docs/rules/no-useless-forward-ref
   */
  '@eslint-react/no-useless-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  '@eslint-react/no-useless-fragment'?: Linter.RuleEntry<EslintReactNoUselessFragment>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  '@eslint-react/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces React is imported via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
   */
  '@eslint-react/prefer-react-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Enforces read-only props in components.
   * @see https://eslint-react.xyz/docs/rules/prefer-read-only-props
   */
  '@eslint-react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * Enforces shorthand syntax for boolean attributes.
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
   */
  '@eslint-react/prefer-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * Enforces shorthand syntax for fragments.
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
   */
  '@eslint-react/prefer-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * Marks variables used in JSX elements as used.
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-vars
   */
  '@eslint-react/use-jsx-vars'?: Linter.RuleEntry<[]>
  /**
   * Prevents leaked `addEventListener` in a component or custom Hook.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  '@eslint-react/web-api/no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Prevents leaked `setInterval` in a component or custom Hook.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  '@eslint-react/web-api/no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Prevents leaked `ResizeObserver` in a component or custom Hook.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  '@eslint-react/web-api/no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Prevents leaked `setTimeout` in a component or custom Hook.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  '@eslint-react/web-api/no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/array-bracket-newline
   */
  '@stylistic/array-bracket-newline'?: Linter.RuleEntry<StylisticArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/array-bracket-spacing
   */
  '@stylistic/array-bracket-spacing'?: Linter.RuleEntry<StylisticArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/array-element-newline
   */
  '@stylistic/array-element-newline'?: Linter.RuleEntry<StylisticArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/arrow-parens
   */
  '@stylistic/arrow-parens'?: Linter.RuleEntry<StylisticArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/arrow-spacing
   */
  '@stylistic/arrow-spacing'?: Linter.RuleEntry<StylisticArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/block-spacing
   */
  '@stylistic/block-spacing'?: Linter.RuleEntry<StylisticBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/brace-style
   */
  '@stylistic/brace-style'?: Linter.RuleEntry<StylisticBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/comma-dangle
   */
  '@stylistic/comma-dangle'?: Linter.RuleEntry<StylisticCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/comma-spacing
   */
  '@stylistic/comma-spacing'?: Linter.RuleEntry<StylisticCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/comma-style
   */
  '@stylistic/comma-style'?: Linter.RuleEntry<StylisticCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/computed-property-spacing
   */
  '@stylistic/computed-property-spacing'?: Linter.RuleEntry<StylisticComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/curly-newline
   */
  '@stylistic/curly-newline'?: Linter.RuleEntry<StylisticCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/dot-location
   */
  '@stylistic/dot-location'?: Linter.RuleEntry<StylisticDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/eol-last
   */
  '@stylistic/eol-last'?: Linter.RuleEntry<StylisticEolLast>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/function-call-argument-newline
   */
  '@stylistic/function-call-argument-newline'?: Linter.RuleEntry<StylisticFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/function-call-spacing
   */
  '@stylistic/function-call-spacing'?: Linter.RuleEntry<StylisticFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/function-paren-newline
   */
  '@stylistic/function-paren-newline'?: Linter.RuleEntry<StylisticFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/generator-star-spacing
   */
  '@stylistic/generator-star-spacing'?: Linter.RuleEntry<StylisticGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/implicit-arrow-linebreak
   */
  '@stylistic/implicit-arrow-linebreak'?: Linter.RuleEntry<StylisticImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/indent
   */
  '@stylistic/indent'?: Linter.RuleEntry<StylisticIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/indent-binary-ops
   */
  '@stylistic/indent-binary-ops'?: Linter.RuleEntry<StylisticIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-child-element-spacing
   */
  '@stylistic/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx-closing-bracket-location
   */
  '@stylistic/jsx-closing-bracket-location'?: Linter.RuleEntry<StylisticJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx-closing-tag-location
   */
  '@stylistic/jsx-closing-tag-location'?: Linter.RuleEntry<StylisticJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx-curly-brace-presence
   */
  '@stylistic/jsx-curly-brace-presence'?: Linter.RuleEntry<StylisticJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-newline
   */
  '@stylistic/jsx-curly-newline'?: Linter.RuleEntry<StylisticJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-spacing
   */
  '@stylistic/jsx-curly-spacing'?: Linter.RuleEntry<StylisticJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx-equals-spacing
   */
  '@stylistic/jsx-equals-spacing'?: Linter.RuleEntry<StylisticJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx-first-prop-new-line
   */
  '@stylistic/jsx-first-prop-new-line'?: Linter.RuleEntry<StylisticJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx-function-call-newline
   */
  '@stylistic/jsx-function-call-newline'?: Linter.RuleEntry<StylisticJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx-indent
   * @deprecated
   */
  '@stylistic/jsx-indent'?: Linter.RuleEntry<StylisticJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx-indent-props
   */
  '@stylistic/jsx-indent-props'?: Linter.RuleEntry<StylisticJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx-max-props-per-line
   */
  '@stylistic/jsx-max-props-per-line'?: Linter.RuleEntry<StylisticJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx-newline
   */
  '@stylistic/jsx-newline'?: Linter.RuleEntry<StylisticJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx-one-expression-per-line
   */
  '@stylistic/jsx-one-expression-per-line'?: Linter.RuleEntry<StylisticJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx-pascal-case
   */
  '@stylistic/jsx-pascal-case'?: Linter.RuleEntry<StylisticJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://eslint.style/rules/jsx-props-no-multi-spaces
   */
  '@stylistic/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/jsx-quotes
   */
  '@stylistic/jsx-quotes'?: Linter.RuleEntry<StylisticJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx-self-closing-comp
   */
  '@stylistic/jsx-self-closing-comp'?: Linter.RuleEntry<StylisticJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx-sort-props
   */
  '@stylistic/jsx-sort-props'?: Linter.RuleEntry<StylisticJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx-tag-spacing
   */
  '@stylistic/jsx-tag-spacing'?: Linter.RuleEntry<StylisticJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx-wrap-multilines
   */
  '@stylistic/jsx-wrap-multilines'?: Linter.RuleEntry<StylisticJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/key-spacing
   */
  '@stylistic/key-spacing'?: Linter.RuleEntry<StylisticKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/keyword-spacing
   */
  '@stylistic/keyword-spacing'?: Linter.RuleEntry<StylisticKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/line-comment-position
   */
  '@stylistic/line-comment-position'?: Linter.RuleEntry<StylisticLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/linebreak-style
   */
  '@stylistic/linebreak-style'?: Linter.RuleEntry<StylisticLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/lines-around-comment
   */
  '@stylistic/lines-around-comment'?: Linter.RuleEntry<StylisticLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/lines-between-class-members
   */
  '@stylistic/lines-between-class-members'?: Linter.RuleEntry<StylisticLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/max-len
   */
  '@stylistic/max-len'?: Linter.RuleEntry<StylisticMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/max-statements-per-line
   */
  '@stylistic/max-statements-per-line'?: Linter.RuleEntry<StylisticMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/member-delimiter-style
   */
  '@stylistic/member-delimiter-style'?: Linter.RuleEntry<StylisticMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/multiline-comment-style
   */
  '@stylistic/multiline-comment-style'?: Linter.RuleEntry<StylisticMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/multiline-ternary
   */
  '@stylistic/multiline-ternary'?: Linter.RuleEntry<StylisticMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/new-parens
   */
  '@stylistic/new-parens'?: Linter.RuleEntry<StylisticNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/newline-per-chained-call
   */
  '@stylistic/newline-per-chained-call'?: Linter.RuleEntry<StylisticNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/no-confusing-arrow
   */
  '@stylistic/no-confusing-arrow'?: Linter.RuleEntry<StylisticNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/no-extra-parens
   */
  '@stylistic/no-extra-parens'?: Linter.RuleEntry<StylisticNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/no-extra-semi
   */
  '@stylistic/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/no-floating-decimal
   */
  '@stylistic/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/no-mixed-operators
   */
  '@stylistic/no-mixed-operators'?: Linter.RuleEntry<StylisticNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/no-mixed-spaces-and-tabs
   */
  '@stylistic/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StylisticNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/no-multi-spaces
   */
  '@stylistic/no-multi-spaces'?: Linter.RuleEntry<StylisticNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/no-multiple-empty-lines
   */
  '@stylistic/no-multiple-empty-lines'?: Linter.RuleEntry<StylisticNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/no-tabs
   */
  '@stylistic/no-tabs'?: Linter.RuleEntry<StylisticNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/no-trailing-spaces
   */
  '@stylistic/no-trailing-spaces'?: Linter.RuleEntry<StylisticNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/no-whitespace-before-property
   */
  '@stylistic/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/nonblock-statement-body-position
   */
  '@stylistic/nonblock-statement-body-position'?: Linter.RuleEntry<StylisticNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/object-curly-newline
   */
  '@stylistic/object-curly-newline'?: Linter.RuleEntry<StylisticObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/object-curly-spacing
   */
  '@stylistic/object-curly-spacing'?: Linter.RuleEntry<StylisticObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/object-property-newline
   */
  '@stylistic/object-property-newline'?: Linter.RuleEntry<StylisticObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/one-var-declaration-per-line
   */
  '@stylistic/one-var-declaration-per-line'?: Linter.RuleEntry<StylisticOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/operator-linebreak
   */
  '@stylistic/operator-linebreak'?: Linter.RuleEntry<StylisticOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/padded-blocks
   */
  '@stylistic/padded-blocks'?: Linter.RuleEntry<StylisticPaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements'?: Linter.RuleEntry<StylisticPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/quote-props
   */
  '@stylistic/quote-props'?: Linter.RuleEntry<StylisticQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/quotes
   */
  '@stylistic/quotes'?: Linter.RuleEntry<StylisticQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/rest-spread-spacing
   */
  '@stylistic/rest-spread-spacing'?: Linter.RuleEntry<StylisticRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/semi
   */
  '@stylistic/semi'?: Linter.RuleEntry<StylisticSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/semi-spacing
   */
  '@stylistic/semi-spacing'?: Linter.RuleEntry<StylisticSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/semi-style
   */
  '@stylistic/semi-style'?: Linter.RuleEntry<StylisticSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/space-before-blocks
   */
  '@stylistic/space-before-blocks'?: Linter.RuleEntry<StylisticSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/space-before-function-paren
   */
  '@stylistic/space-before-function-paren'?: Linter.RuleEntry<StylisticSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/space-in-parens
   */
  '@stylistic/space-in-parens'?: Linter.RuleEntry<StylisticSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/space-infix-ops
   */
  '@stylistic/space-infix-ops'?: Linter.RuleEntry<StylisticSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/space-unary-ops
   */
  '@stylistic/space-unary-ops'?: Linter.RuleEntry<StylisticSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/spaced-comment
   */
  '@stylistic/spaced-comment'?: Linter.RuleEntry<StylisticSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/switch-colon-spacing
   */
  '@stylistic/switch-colon-spacing'?: Linter.RuleEntry<StylisticSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/template-curly-spacing
   */
  '@stylistic/template-curly-spacing'?: Linter.RuleEntry<StylisticTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/template-tag-spacing
   */
  '@stylistic/template-tag-spacing'?: Linter.RuleEntry<StylisticTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/type-annotation-spacing
   */
  '@stylistic/type-annotation-spacing'?: Linter.RuleEntry<StylisticTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/type-generic-spacing
   */
  '@stylistic/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/type-named-tuple-spacing
   */
  '@stylistic/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/wrap-iife
   */
  '@stylistic/wrap-iife'?: Linter.RuleEntry<StylisticWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/wrap-regex
   */
  '@stylistic/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/yield-star-spacing
   */
  '@stylistic/yield-star-spacing'?: Linter.RuleEntry<StylisticYieldStarSpacing>
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  '@typescript-eslint/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   * @deprecated
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/consistent-type-specifier-style.md
   */
  'import-x/consistent-type-specifier-style'?: Linter.RuleEntry<ImportXConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/default.md
   */
  'import-x/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/dynamic-import-chunkname.md
   */
  'import-x/dynamic-import-chunkname'?: Linter.RuleEntry<ImportXDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/export.md
   */
  'import-x/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/exports-last.md
   */
  'import-x/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/extensions.md
   */
  'import-x/extensions'?: Linter.RuleEntry<ImportXExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/first.md
   */
  'import-x/first'?: Linter.RuleEntry<ImportXFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/group-exports.md
   */
  'import-x/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import-x/first`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/imports-first.md
   * @deprecated
   */
  'import-x/imports-first'?: Linter.RuleEntry<ImportXImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/max-dependencies.md
   */
  'import-x/max-dependencies'?: Linter.RuleEntry<ImportXMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/named.md
   */
  'import-x/named'?: Linter.RuleEntry<ImportXNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/namespace.md
   */
  'import-x/namespace'?: Linter.RuleEntry<ImportXNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/newline-after-import.md
   */
  'import-x/newline-after-import'?: Linter.RuleEntry<ImportXNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-absolute-path.md
   */
  'import-x/no-absolute-path'?: Linter.RuleEntry<ImportXNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-amd.md
   */
  'import-x/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-anonymous-default-export.md
   */
  'import-x/no-anonymous-default-export'?: Linter.RuleEntry<ImportXNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-commonjs.md
   */
  'import-x/no-commonjs'?: Linter.RuleEntry<ImportXNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-cycle.md
   */
  'import-x/no-cycle'?: Linter.RuleEntry<ImportXNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-default-export.md
   */
  'import-x/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-deprecated.md
   */
  'import-x/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-duplicates.md
   */
  'import-x/no-duplicates'?: Linter.RuleEntry<ImportXNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-dynamic-require.md
   */
  'import-x/no-dynamic-require'?: Linter.RuleEntry<ImportXNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-empty-named-blocks.md
   */
  'import-x/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-extraneous-dependencies.md
   */
  'import-x/no-extraneous-dependencies'?: Linter.RuleEntry<ImportXNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-import-module-exports.md
   */
  'import-x/no-import-module-exports'?: Linter.RuleEntry<ImportXNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-internal-modules.md
   */
  'import-x/no-internal-modules'?: Linter.RuleEntry<ImportXNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-mutable-exports.md
   */
  'import-x/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-as-default.md
   */
  'import-x/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-as-default-member.md
   */
  'import-x/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-default.md
   */
  'import-x/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-export.md
   */
  'import-x/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-namespace.md
   */
  'import-x/no-namespace'?: Linter.RuleEntry<ImportXNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-nodejs-modules.md
   */
  'import-x/no-nodejs-modules'?: Linter.RuleEntry<ImportXNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-relative-packages.md
   */
  'import-x/no-relative-packages'?: Linter.RuleEntry<ImportXNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-relative-parent-imports.md
   */
  'import-x/no-relative-parent-imports'?: Linter.RuleEntry<ImportXNoRelativeParentImports>
  /**
   * Forbid importing a default export by a different name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-rename-default.md
   */
  'import-x/no-rename-default'?: Linter.RuleEntry<ImportXNoRenameDefault>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-restricted-paths.md
   */
  'import-x/no-restricted-paths'?: Linter.RuleEntry<ImportXNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-self-import.md
   */
  'import-x/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-unassigned-import.md
   */
  'import-x/no-unassigned-import'?: Linter.RuleEntry<ImportXNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-unresolved.md
   */
  'import-x/no-unresolved'?: Linter.RuleEntry<ImportXNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-unused-modules.md
   */
  'import-x/no-unused-modules'?: Linter.RuleEntry<ImportXNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-useless-path-segments.md
   */
  'import-x/no-useless-path-segments'?: Linter.RuleEntry<ImportXNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-webpack-loader-syntax.md
   */
  'import-x/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/order.md
   */
  'import-x/order'?: Linter.RuleEntry<ImportXOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/prefer-default-export.md
   */
  'import-x/prefer-default-export'?: Linter.RuleEntry<ImportXPreferDefaultExport>
  /**
   * Enforce using namespace imports for specific modules, like `react`/`react-dom`, etc.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/prefer-namespace-import.md
   */
  'import-x/prefer-namespace-import'?: Linter.RuleEntry<ImportXPreferNamespaceImport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/unambiguous.md
   */
  'import-x/unambiguous'?: Linter.RuleEntry<[]>
  /**
   * Checks that `@access` tags have a valid value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header
   */
  'jsdoc/check-access'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header
   */
  'jsdoc/check-alignment'?: Linter.RuleEntry<[]>
  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header
   */
  'jsdoc/check-examples'?: Linter.RuleEntry<JsdocCheckExamples>
  /**
   * Reports invalid padding inside JSDoc blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header
   */
  'jsdoc/check-indentation'?: Linter.RuleEntry<JsdocCheckIndentation>
  /**
   * Reports invalid alignment of JSDoc block lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header
   */
  'jsdoc/check-line-alignment'?: Linter.RuleEntry<JsdocCheckLineAlignment>
  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header
   */
  'jsdoc/check-param-names'?: Linter.RuleEntry<JsdocCheckParamNames>
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header
   */
  'jsdoc/check-property-names'?: Linter.RuleEntry<JsdocCheckPropertyNames>
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header
   */
  'jsdoc/check-syntax'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid block tag names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header
   */
  'jsdoc/check-tag-names'?: Linter.RuleEntry<JsdocCheckTagNames>
  /**
   * Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md#repos-sticky-header
   */
  'jsdoc/check-template-names'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid types.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header
   */
  'jsdoc/check-types'?: Linter.RuleEntry<JsdocCheckTypes>
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header
   */
  'jsdoc/check-values'?: Linter.RuleEntry<JsdocCheckValues>
  /**
   * Converts non-JSDoc comments preceding or following nodes into JSDoc ones
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header
   */
  'jsdoc/convert-to-jsdoc-comments'?: Linter.RuleEntry<JsdocConvertToJsdocComments>
  /**
   * Expects specific tags to be empty of any content.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header
   */
  'jsdoc/empty-tags'?: Linter.RuleEntry<JsdocEmptyTags>
  /**
   * Reports an issue with any non-constructor function using `@implements`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header
   */
  'jsdoc/implements-on-classes'?: Linter.RuleEntry<JsdocImplementsOnClasses>
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header
   */
  'jsdoc/imports-as-dependencies'?: Linter.RuleEntry<[]>
  /**
   * This rule reports doc comments that only restate their attached name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header
   */
  'jsdoc/informative-docs'?: Linter.RuleEntry<JsdocInformativeDocs>
  /**
   * Enforces minimum number of newlines before JSDoc comment blocks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md#repos-sticky-header
   */
  'jsdoc/lines-before-block'?: Linter.RuleEntry<JsdocLinesBeforeBlock>
  /**
   * Enforces a regular expression pattern on descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header
   */
  'jsdoc/match-description'?: Linter.RuleEntry<JsdocMatchDescription>
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header
   */
  'jsdoc/match-name'?: Linter.RuleEntry<JsdocMatchName>
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header
   */
  'jsdoc/multiline-blocks'?: Linter.RuleEntry<JsdocMultilineBlocks>
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header
   */
  'jsdoc/no-bad-blocks'?: Linter.RuleEntry<JsdocNoBadBlocks>
  /**
   * Detects and removes extra lines of a blank block description
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header
   */
  'jsdoc/no-blank-block-descriptions'?: Linter.RuleEntry<[]>
  /**
   * Removes empty blocks with nothing but possibly line breaks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header
   */
  'jsdoc/no-blank-blocks'?: Linter.RuleEntry<JsdocNoBlankBlocks>
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header
   */
  'jsdoc/no-defaults'?: Linter.RuleEntry<JsdocNoDefaults>
  /**
   * Reports when certain comment structures are always expected.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header
   */
  'jsdoc/no-missing-syntax'?: Linter.RuleEntry<JsdocNoMissingSyntax>
  /**
   * Prevents use of multiple asterisks at the beginning of lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header
   */
  'jsdoc/no-multi-asterisks'?: Linter.RuleEntry<JsdocNoMultiAsterisks>
  /**
   * Reports when certain comment structures are present.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header
   */
  'jsdoc/no-restricted-syntax'?: Linter.RuleEntry<JsdocNoRestrictedSyntax>
  /**
   * This rule reports types being used on `@param` or `@returns`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header
   */
  'jsdoc/no-types'?: Linter.RuleEntry<JsdocNoTypes>
  /**
   * Checks that types in jsdoc comments are defined.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header
   */
  'jsdoc/no-undefined-types'?: Linter.RuleEntry<JsdocNoUndefinedTypes>
  /**
   * Requires that each JSDoc line starts with an `*`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header
   */
  'jsdoc/require-asterisk-prefix'?: Linter.RuleEntry<JsdocRequireAsteriskPrefix>
  /**
   * Requires that all functions have a description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header
   */
  'jsdoc/require-description'?: Linter.RuleEntry<JsdocRequireDescription>
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header
   */
  'jsdoc/require-description-complete-sentence'?: Linter.RuleEntry<JsdocRequireDescriptionCompleteSentence>
  /**
   * Requires that all functions have examples.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header
   */
  'jsdoc/require-example'?: Linter.RuleEntry<JsdocRequireExample>
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header
   */
  'jsdoc/require-file-overview'?: Linter.RuleEntry<JsdocRequireFileOverview>
  /**
   * Requires a hyphen before the `@param` description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header
   */
  'jsdoc/require-hyphen-before-param-description'?: Linter.RuleEntry<JsdocRequireHyphenBeforeParamDescription>
  /**
   * Require JSDoc comments
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header
   */
  'jsdoc/require-jsdoc'?: Linter.RuleEntry<JsdocRequireJsdoc>
  /**
   * Requires that all function parameters are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header
   */
  'jsdoc/require-param'?: Linter.RuleEntry<JsdocRequireParam>
  /**
   * Requires that each `@param` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header
   */
  'jsdoc/require-param-description'?: Linter.RuleEntry<JsdocRequireParamDescription>
  /**
   * Requires that all function parameters have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header
   */
  'jsdoc/require-param-name'?: Linter.RuleEntry<JsdocRequireParamName>
  /**
   * Requires that each `@param` tag has a `type` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header
   */
  'jsdoc/require-param-type'?: Linter.RuleEntry<JsdocRequireParamType>
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header
   */
  'jsdoc/require-property'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header
   */
  'jsdoc/require-property-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that all function `@property` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header
   */
  'jsdoc/require-property-name'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `type` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header
   */
  'jsdoc/require-property-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that returns are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header
   */
  'jsdoc/require-returns'?: Linter.RuleEntry<JsdocRequireReturns>
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header
   */
  'jsdoc/require-returns-check'?: Linter.RuleEntry<JsdocRequireReturnsCheck>
  /**
   * Requires that the `@returns` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header
   */
  'jsdoc/require-returns-description'?: Linter.RuleEntry<JsdocRequireReturnsDescription>
  /**
   * Requires that `@returns` tag has `type` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header
   */
  'jsdoc/require-returns-type'?: Linter.RuleEntry<JsdocRequireReturnsType>
  /**
   * Requires template tags for each generic type parameter
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header
   */
  'jsdoc/require-template'?: Linter.RuleEntry<JsdocRequireTemplate>
  /**
   * Requires that throw statements are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header
   */
  'jsdoc/require-throws'?: Linter.RuleEntry<JsdocRequireThrows>
  /**
   * Requires yields are documented.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header
   */
  'jsdoc/require-yields'?: Linter.RuleEntry<JsdocRequireYields>
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header
   */
  'jsdoc/require-yields-check'?: Linter.RuleEntry<JsdocRequireYieldsCheck>
  /**
   * Sorts tags by a specified sequence according to tag name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header
   */
  'jsdoc/sort-tags'?: Linter.RuleEntry<JsdocSortTags>
  /**
   * Enforces lines (or no lines) between tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header
   */
  'jsdoc/tag-lines'?: Linter.RuleEntry<JsdocTagLines>
  /**
   * Auto-escape certain characters that are input within block and tag descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header
   */
  'jsdoc/text-escaping'?: Linter.RuleEntry<JsdocTextEscaping>
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header
   */
  'jsdoc/valid-types'?: Linter.RuleEntry<JsdocValidTypes>
  /**
   * enforce line breaks after opening and before closing array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
   */
  'jsonc/array-bracket-newline'?: Linter.RuleEntry<JsoncArrayBracketNewline>
  /**
   * disallow or enforce spaces inside of brackets
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
   */
  'jsonc/array-bracket-spacing'?: Linter.RuleEntry<JsoncArrayBracketSpacing>
  /**
   * enforce line breaks between array elements
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
   */
  'jsonc/array-element-newline'?: Linter.RuleEntry<JsoncArrayElementNewline>
  /**
   * apply jsonc rules similar to your configured ESLint core rules
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html
   */
  'jsonc/auto'?: Linter.RuleEntry<[]>
  /**
   * require or disallow trailing commas
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
   */
  'jsonc/comma-dangle'?: Linter.RuleEntry<JsoncCommaDangle>
  /**
   * enforce consistent comma style
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
   */
  'jsonc/comma-style'?: Linter.RuleEntry<JsoncCommaStyle>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
   */
  'jsonc/indent'?: Linter.RuleEntry<JsoncIndent>
  /**
   * enforce naming convention to property key names
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html
   */
  'jsonc/key-name-casing'?: Linter.RuleEntry<JsoncKeyNameCasing>
  /**
   * enforce consistent spacing between keys and values in object literal properties
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
   */
  'jsonc/key-spacing'?: Linter.RuleEntry<JsoncKeySpacing>
  /**
   * disallow BigInt literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html
   */
  'jsonc/no-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow binary expression
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html
   */
  'jsonc/no-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * disallow binary numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html
   */
  'jsonc/no-binary-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow comments
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
   */
  'jsonc/no-comments'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate keys in object literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
   */
  'jsonc/no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * disallow escape sequences in identifiers.
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html
   */
  'jsonc/no-escape-sequence-in-identifier'?: Linter.RuleEntry<[]>
  /**
   * disallow leading or trailing decimal points in numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
   */
  'jsonc/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * disallow hexadecimal numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html
   */
  'jsonc/no-hexadecimal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow Infinity
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html
   */
  'jsonc/no-infinity'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
   */
  'jsonc/no-irregular-whitespace'?: Linter.RuleEntry<JsoncNoIrregularWhitespace>
  /**
   * disallow multiline strings
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
   */
  'jsonc/no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * disallow NaN
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html
   */
  'jsonc/no-nan'?: Linter.RuleEntry<[]>
  /**
   * disallow number property keys
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html
   */
  'jsonc/no-number-props'?: Linter.RuleEntry<[]>
  /**
   * disallow numeric separators
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html
   */
  'jsonc/no-numeric-separators'?: Linter.RuleEntry<[]>
  /**
   * disallow legacy octal literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
   */
  'jsonc/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow octal escape sequences in string literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
   */
  'jsonc/no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow octal numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html
   */
  'jsonc/no-octal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow parentheses around the expression
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html
   */
  'jsonc/no-parenthesized'?: Linter.RuleEntry<[]>
  /**
   * disallow plus sign
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html
   */
  'jsonc/no-plus-sign'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html
   */
  'jsonc/no-regexp-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow sparse arrays
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
   */
  'jsonc/no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * disallow template literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html
   */
  'jsonc/no-template-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow `undefined`
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html
   */
  'jsonc/no-undefined-value'?: Linter.RuleEntry<[]>
  /**
   * disallow Unicode code point escape sequences.
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html
   */
  'jsonc/no-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape usage
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
   */
  'jsonc/no-useless-escape'?: Linter.RuleEntry<JsoncNoUselessEscape>
  /**
   * enforce consistent line breaks inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
   */
  'jsonc/object-curly-newline'?: Linter.RuleEntry<JsoncObjectCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
   */
  'jsonc/object-curly-spacing'?: Linter.RuleEntry<JsoncObjectCurlySpacing>
  /**
   * enforce placing object properties on separate lines
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
   */
  'jsonc/object-property-newline'?: Linter.RuleEntry<JsoncObjectPropertyNewline>
  /**
   * require quotes around object literal property names
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
   */
  'jsonc/quote-props'?: Linter.RuleEntry<JsoncQuoteProps>
  /**
   * enforce use of double or single quotes
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
   */
  'jsonc/quotes'?: Linter.RuleEntry<JsoncQuotes>
  /**
   * require array values to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html
   */
  'jsonc/sort-array-values'?: Linter.RuleEntry<JsoncSortArrayValues>
  /**
   * require object keys to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
   */
  'jsonc/sort-keys'?: Linter.RuleEntry<JsoncSortKeys>
  /**
   * disallow spaces after unary operators
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
   */
  'jsonc/space-unary-ops'?: Linter.RuleEntry<JsoncSpaceUnaryOps>
  /**
   * disallow invalid number for JSON
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html
   */
  'jsonc/valid-json-number'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html
   */
  'jsonc/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
  /**
   * Enforce sorted arrays before include method.
   * @see https://perfectionist.dev/rules/sort-array-includes
   */
  'perfectionist/sort-array-includes'?: Linter.RuleEntry<PerfectionistSortArrayIncludes>
  /**
   * Enforce sorted classes.
   * @see https://perfectionist.dev/rules/sort-classes
   */
  'perfectionist/sort-classes'?: Linter.RuleEntry<PerfectionistSortClasses>
  /**
   * Enforce sorted decorators.
   * @see https://perfectionist.dev/rules/sort-decorators
   */
  'perfectionist/sort-decorators'?: Linter.RuleEntry<PerfectionistSortDecorators>
  /**
   * Enforce sorted TypeScript enums.
   * @see https://perfectionist.dev/rules/sort-enums
   */
  'perfectionist/sort-enums'?: Linter.RuleEntry<PerfectionistSortEnums>
  /**
   * Enforce sorted exports.
   * @see https://perfectionist.dev/rules/sort-exports
   */
  'perfectionist/sort-exports'?: Linter.RuleEntry<PerfectionistSortExports>
  /**
   * Enforce sorted heritage clauses.
   * @see https://perfectionist.dev/rules/sort-heritage-clauses
   */
  'perfectionist/sort-heritage-clauses'?: Linter.RuleEntry<PerfectionistSortHeritageClauses>
  /**
   * Enforce sorted imports.
   * @see https://perfectionist.dev/rules/sort-imports
   */
  'perfectionist/sort-imports'?: Linter.RuleEntry<PerfectionistSortImports>
  /**
   * Enforce sorted interface properties.
   * @see https://perfectionist.dev/rules/sort-interfaces
   */
  'perfectionist/sort-interfaces'?: Linter.RuleEntry<PerfectionistSortInterfaces>
  /**
   * Enforce sorted intersection types.
   * @see https://perfectionist.dev/rules/sort-intersection-types
   */
  'perfectionist/sort-intersection-types'?: Linter.RuleEntry<PerfectionistSortIntersectionTypes>
  /**
   * Enforce sorted JSX props.
   * @see https://perfectionist.dev/rules/sort-jsx-props
   */
  'perfectionist/sort-jsx-props'?: Linter.RuleEntry<PerfectionistSortJsxProps>
  /**
   * Enforce sorted Map elements.
   * @see https://perfectionist.dev/rules/sort-maps
   */
  'perfectionist/sort-maps'?: Linter.RuleEntry<PerfectionistSortMaps>
  /**
   * Enforce sorted modules.
   * @see https://perfectionist.dev/rules/sort-modules
   */
  'perfectionist/sort-modules'?: Linter.RuleEntry<PerfectionistSortModules>
  /**
   * Enforce sorted named exports.
   * @see https://perfectionist.dev/rules/sort-named-exports
   */
  'perfectionist/sort-named-exports'?: Linter.RuleEntry<PerfectionistSortNamedExports>
  /**
   * Enforce sorted named imports.
   * @see https://perfectionist.dev/rules/sort-named-imports
   */
  'perfectionist/sort-named-imports'?: Linter.RuleEntry<PerfectionistSortNamedImports>
  /**
   * Enforce sorted object types.
   * @see https://perfectionist.dev/rules/sort-object-types
   */
  'perfectionist/sort-object-types'?: Linter.RuleEntry<PerfectionistSortObjectTypes>
  /**
   * Enforce sorted objects.
   * @see https://perfectionist.dev/rules/sort-objects
   */
  'perfectionist/sort-objects'?: Linter.RuleEntry<PerfectionistSortObjects>
  /**
   * Enforce sorted sets.
   * @see https://perfectionist.dev/rules/sort-sets
   */
  'perfectionist/sort-sets'?: Linter.RuleEntry<PerfectionistSortSets>
  /**
   * Enforce sorted switch cases.
   * @see https://perfectionist.dev/rules/sort-switch-case
   */
  'perfectionist/sort-switch-case'?: Linter.RuleEntry<PerfectionistSortSwitchCase>
  /**
   * Enforce sorted union types.
   * @see https://perfectionist.dev/rules/sort-union-types
   */
  'perfectionist/sort-union-types'?: Linter.RuleEntry<PerfectionistSortUnionTypes>
  /**
   * Enforce sorted variable declarations.
   * @see https://perfectionist.dev/rules/sort-variable-declarations
   */
  'perfectionist/sort-variable-declarations'?: Linter.RuleEntry<PerfectionistSortVariableDeclarations>
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExhaustiveDeps>
  /**
   * enforces the Rules of Hooks
   * @see https://reactjs.org/docs/hooks-rules.html
   */
  'react-hooks/rules-of-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow conditionals where the type is always truthy or always falsy
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/@typescript-eslint/no-unnecessary-condition/
   * @deprecated
   */
  'svelte/@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<SvelteTypescriptEslintNoUnnecessaryCondition>
  /**
   * disallows the use of languages other than those specified in the configuration for the lang attribute of `<script>` and `<style>` blocks.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/block-lang/
   */
  'svelte/block-lang'?: Linter.RuleEntry<SvelteBlockLang>
  /**
   * disallow usage of button without an explicit type attribute
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/button-has-type/
   */
  'svelte/button-has-type'?: Linter.RuleEntry<SvelteButtonHasType>
  /**
   * support comment-directives in HTML template
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/comment-directive/
   */
  'svelte/comment-directive'?: Linter.RuleEntry<SvelteCommentDirective>
  /**
   * enforce a consistent style for CSS selectors
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/consistent-selector-style/
   */
  'svelte/consistent-selector-style'?: Linter.RuleEntry<SvelteConsistentSelectorStyle>
  /**
   * derived store should use same variable names between values and callback
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/derived-has-same-inputs-outputs/
   */
  'svelte/derived-has-same-inputs-outputs'?: Linter.RuleEntry<[]>
  /**
   * require slot type declaration using the `$$Slots` interface
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/experimental-require-slot-types/
   */
  'svelte/experimental-require-slot-types'?: Linter.RuleEntry<[]>
  /**
   * require the strictEvents attribute on `<script>` tags
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/experimental-require-strict-events/
   */
  'svelte/experimental-require-strict-events'?: Linter.RuleEntry<[]>
  /**
   * enforce the location of first attribute
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/first-attribute-linebreak/
   */
  'svelte/first-attribute-linebreak'?: Linter.RuleEntry<SvelteFirstAttributeLinebreak>
  /**
   * Require or disallow a line break before tag's closing brackets
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/html-closing-bracket-new-line/
   */
  'svelte/html-closing-bracket-new-line'?: Linter.RuleEntry<SvelteHtmlClosingBracketNewLine>
  /**
   * require or disallow a space before tag's closing brackets
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/html-closing-bracket-spacing/
   */
  'svelte/html-closing-bracket-spacing'?: Linter.RuleEntry<SvelteHtmlClosingBracketSpacing>
  /**
   * enforce quotes style of HTML attributes
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/html-quotes/
   */
  'svelte/html-quotes'?: Linter.RuleEntry<SvelteHtmlQuotes>
  /**
   * enforce self-closing style
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/html-self-closing/
   */
  'svelte/html-self-closing'?: Linter.RuleEntry<SvelteHtmlSelfClosing>
  /**
   * enforce consistent indentation
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/indent/
   */
  'svelte/indent'?: Linter.RuleEntry<SvelteIndent>
  /**
   * Svelte runtime prevents calling the same reactive statement twice in a microtask. But between different microtask, it doesn't prevent.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/infinite-reactive-loop/
   */
  'svelte/infinite-reactive-loop'?: Linter.RuleEntry<[]>
  /**
   * enforce the maximum number of attributes per line
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/max-attributes-per-line/
   */
  'svelte/max-attributes-per-line'?: Linter.RuleEntry<SvelteMaxAttributesPerLine>
  /**
   * enforce unified spacing in mustache
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/mustache-spacing/
   */
  'svelte/mustache-spacing'?: Linter.RuleEntry<SvelteMustacheSpacing>
  /**
   * Warns against the use of `addEventListener`
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-add-event-listener/
   */
  'svelte/no-add-event-listener'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of `{@debug}`
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-at-debug-tags/
   */
  'svelte/no-at-debug-tags'?: Linter.RuleEntry<[]>
  /**
   * disallow use of `{@html}` to prevent XSS attack
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-at-html-tags/
   */
  'svelte/no-at-html-tags'?: Linter.RuleEntry<[]>
  /**
   * disallow DOM manipulating
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dom-manipulating/
   */
  'svelte/no-dom-manipulating'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate conditions in `{#if}` / `{:else if}` chains
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-else-if-blocks/
   */
  'svelte/no-dupe-else-if-blocks'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate `on:` directives
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-on-directives/
   */
  'svelte/no-dupe-on-directives'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate style properties
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-style-properties/
   */
  'svelte/no-dupe-style-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate `use:` directives
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-use-directives/
   */
  'svelte/no-dupe-use-directives'?: Linter.RuleEntry<[]>
  /**
   * disallow dynamic slot name
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dynamic-slot-name/
   * @deprecated
   */
  'svelte/no-dynamic-slot-name'?: Linter.RuleEntry<[]>
  /**
   * disallow exporting load functions in `*.svelte` module in SvelteKit page components.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-export-load-in-svelte-module-in-kit-pages/
   */
  'svelte/no-export-load-in-svelte-module-in-kit-pages'?: Linter.RuleEntry<[]>
  /**
   * disallow wrapping single reactive statements in curly braces
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-extra-reactive-curlies/
   */
  'svelte/no-extra-reactive-curlies'?: Linter.RuleEntry<[]>
  /**
   * disallow using goto() without the base path
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-goto-without-base/
   * @deprecated
   */
  'svelte/no-goto-without-base'?: Linter.RuleEntry<[]>
  /**
   * disallow ignoring the unsubscribe method returned by the `subscribe()` on Svelte stores.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-ignored-unsubscribe/
   */
  'svelte/no-ignored-unsubscribe'?: Linter.RuleEntry<[]>
  /**
   * disallow reactive statements that don't reference reactive values.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-immutable-reactive-statements/
   */
  'svelte/no-immutable-reactive-statements'?: Linter.RuleEntry<[]>
  /**
   * disallow attributes and directives that produce inline styles
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inline-styles/
   */
  'svelte/no-inline-styles'?: Linter.RuleEntry<SvelteNoInlineStyles>
  /**
   * disallow variable or `function` declarations in nested blocks
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inner-declarations/
   */
  'svelte/no-inner-declarations'?: Linter.RuleEntry<SvelteNoInnerDeclarations>
  /**
   * Warns against the use of `$inspect` directive
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inspect/
   */
  'svelte/no-inspect'?: Linter.RuleEntry<[]>
  /**
   * disallow using navigation (links, goto, pushState, replaceState) without the base path
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-navigation-without-base/
   */
  'svelte/no-navigation-without-base'?: Linter.RuleEntry<SvelteNoNavigationWithoutBase>
  /**
   * disallow use of not function in event handler
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-not-function-handler/
   */
  'svelte/no-not-function-handler'?: Linter.RuleEntry<[]>
  /**
   * disallow objects in text mustache interpolation
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-object-in-text-mustaches/
   */
  'svelte/no-object-in-text-mustaches'?: Linter.RuleEntry<[]>
  /**
   * Checks for invalid raw HTML elements
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-raw-special-elements/
   */
  'svelte/no-raw-special-elements'?: Linter.RuleEntry<[]>
  /**
   * it's not necessary to define functions in reactive statements
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-functions/
   */
  'svelte/no-reactive-functions'?: Linter.RuleEntry<[]>
  /**
   * don't assign literal values in reactive statements
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-literals/
   */
  'svelte/no-reactive-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow reassigning reactive values
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-reassign/
   */
  'svelte/no-reactive-reassign'?: Linter.RuleEntry<SvelteNoReactiveReassign>
  /**
   * disallow specific HTML elements
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-restricted-html-elements/
   */
  'svelte/no-restricted-html-elements'?: Linter.RuleEntry<SvelteNoRestrictedHtmlElements>
  /**
   * disallow shorthand style properties that override related longhand properties
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-shorthand-style-property-overrides/
   */
  'svelte/no-shorthand-style-property-overrides'?: Linter.RuleEntry<[]>
  /**
   * disallow spaces around equal signs in attribute
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-spaces-around-equal-signs-in-attribute/
   */
  'svelte/no-spaces-around-equal-signs-in-attribute'?: Linter.RuleEntry<[]>
  /**
   * disallow using async/await inside svelte stores because it causes issues with the auto-unsubscribing features
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-store-async/
   */
  'svelte/no-store-async'?: Linter.RuleEntry<[]>
  /**
   * svelte/internal will be removed in Svelte 6.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-svelte-internal/
   */
  'svelte/no-svelte-internal'?: Linter.RuleEntry<[]>
  /**
   * disallow `target="_blank"` attribute without `rel="noopener noreferrer"`
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-target-blank/
   */
  'svelte/no-target-blank'?: Linter.RuleEntry<SvelteNoTargetBlank>
  /**
   * disallow using top-level browser global variables
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-top-level-browser-globals/
   */
  'svelte/no-top-level-browser-globals'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing whitespace at the end of lines
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/
   */
  'svelte/no-trailing-spaces'?: Linter.RuleEntry<SvelteNoTrailingSpaces>
  /**
   * disallow unknown `style:property`
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unknown-style-directive-property/
   */
  'svelte/no-unknown-style-directive-property'?: Linter.RuleEntry<SvelteNoUnknownStyleDirectiveProperty>
  /**
   * Disallow unnecessary $state wrapping of reactive classes
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unnecessary-state-wrap/
   */
  'svelte/no-unnecessary-state-wrap'?: Linter.RuleEntry<SvelteNoUnnecessaryStateWrap>
  /**
   * disallow the use of a class in the template without a corresponding style
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unused-class-name/
   */
  'svelte/no-unused-class-name'?: Linter.RuleEntry<SvelteNoUnusedClassName>
  /**
   * Warns about defined Props properties that are unused
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unused-props/
   */
  'svelte/no-unused-props'?: Linter.RuleEntry<SvelteNoUnusedProps>
  /**
   * disallow unused svelte-ignore comments
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unused-svelte-ignore/
   */
  'svelte/no-unused-svelte-ignore'?: Linter.RuleEntry<[]>
  /**
   * disallow explicit children snippet where it's not needed
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-useless-children-snippet/
   */
  'svelte/no-useless-children-snippet'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary mustache interpolations
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/no-useless-mustaches/
   */
  'svelte/no-useless-mustaches'?: Linter.RuleEntry<SvelteNoUselessMustaches>
  /**
   * require class directives instead of ternary expressions
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-class-directive/
   */
  'svelte/prefer-class-directive'?: Linter.RuleEntry<SveltePreferClassDirective>
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-const/
   */
  'svelte/prefer-const'?: Linter.RuleEntry<SveltePreferConst>
  /**
   * destructure values from object stores for better change tracking & fewer redraws
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-destructured-store-props/
   */
  'svelte/prefer-destructured-store-props'?: Linter.RuleEntry<[]>
  /**
   * require style directives instead of style attribute
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-style-directive/
   */
  'svelte/prefer-style-directive'?: Linter.RuleEntry<[]>
  /**
   * disallow using mutable instances of built-in classes where a reactive alternative is provided by svelte/reactivity
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-svelte-reactivity/
   */
  'svelte/prefer-svelte-reactivity'?: Linter.RuleEntry<[]>
  /**
   * Prefer using writable $derived instead of $state and $effect
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-writable-derived/
   */
  'svelte/prefer-writable-derived'?: Linter.RuleEntry<[]>
  /**
   * require keyed `{#each}` block
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-each-key/
   */
  'svelte/require-each-key'?: Linter.RuleEntry<[]>
  /**
   * require type parameters for `createEventDispatcher`
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-event-dispatcher-types/
   */
  'svelte/require-event-dispatcher-types'?: Linter.RuleEntry<[]>
  /**
   * require component event names to start with "on"
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-event-prefix/
   */
  'svelte/require-event-prefix'?: Linter.RuleEntry<SvelteRequireEventPrefix>
  /**
   * require style attributes that can be optimized
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-optimized-style-attribute/
   */
  'svelte/require-optimized-style-attribute'?: Linter.RuleEntry<[]>
  /**
   * store callbacks must use `set` param
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-store-callbacks-use-set-param/
   */
  'svelte/require-store-callbacks-use-set-param'?: Linter.RuleEntry<[]>
  /**
   * disallow to use of the store itself as an operand. Need to use $ prefix or get function.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-store-reactive-access/
   */
  'svelte/require-store-reactive-access'?: Linter.RuleEntry<[]>
  /**
   * require initial value in store
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/require-stores-init/
   */
  'svelte/require-stores-init'?: Linter.RuleEntry<[]>
  /**
   * enforce use of shorthand syntax in attribute
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/shorthand-attribute/
   */
  'svelte/shorthand-attribute'?: Linter.RuleEntry<SvelteShorthandAttribute>
  /**
   * enforce use of shorthand syntax in directives
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/shorthand-directive/
   */
  'svelte/shorthand-directive'?: Linter.RuleEntry<SvelteShorthandDirective>
  /**
   * enforce order of attributes
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/sort-attributes/
   */
  'svelte/sort-attributes'?: Linter.RuleEntry<SvelteSortAttributes>
  /**
   * enforce consistent spacing after the `<!--` and before the `-->` in a HTML comment
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/spaced-html-comment/
   */
  'svelte/spaced-html-comment'?: Linter.RuleEntry<SvelteSpacedHtmlComment>
  /**
   * system rule for working this plugin
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/system/
   */
  'svelte/system'?: Linter.RuleEntry<[]>
  /**
   * disallow warnings when compiling.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-compile/
   */
  'svelte/valid-compile'?: Linter.RuleEntry<SvelteValidCompile>
  /**
   * enforce keys to use variables defined in the `{#each}` block
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-each-key/
   */
  'svelte/valid-each-key'?: Linter.RuleEntry<[]>
  /**
   * disallow props other than data or errors in SvelteKit page components.
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-prop-names-in-kit-pages/
   */
  'svelte/valid-prop-names-in-kit-pages'?: Linter.RuleEntry<[]>
  /**
   * require valid style element parsing
   * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-style-parse/
   */
  'svelte/valid-style-parse'?: Linter.RuleEntry<[]>
}

/* ----- Declarations ----- */export type EslintReactDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]

export type EslintReactNamingConventionComponentName = []|[(("PascalCase" | "CONSTANT_CASE") | {
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  excepts?: string[]
  rule?: ("PascalCase" | "CONSTANT_CASE")
})]

export type EslintReactNamingConventionFilename = []|[(("PascalCase" | "camelCase" | "kebab-case" | "snake_case") | {
  excepts?: string[]
  extensions?: string[]
  rule?: ("PascalCase" | "camelCase" | "kebab-case" | "snake_case")
})]

export type EslintReactNamingConventionFilenameExtension = []|[(("always" | "as-needed") | {
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
})]

export type EslintReactNoUselessFragment = []|[{
  /**
   * Allow fragments with a single expression child
   */
  allowExpressions?: boolean
}]

export type StylisticArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]

export type StylisticArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]

export type StylisticArrayElementNewline = []|[(_StylisticArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StylisticArrayElementNewlineBasicConfig
  ArrayPattern?: _StylisticArrayElementNewlineBasicConfig
})]
export type _StylisticArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})

export type StylisticArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]

export type StylisticArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]

export type StylisticBlockSpacing = []|[("always" | "never")]

export type StylisticBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]

export type StylisticCommaDangle = []|[(_StylisticCommaDangleValue | {
  arrays?: _StylisticCommaDangleValueWithIgnore
  objects?: _StylisticCommaDangleValueWithIgnore
  imports?: _StylisticCommaDangleValueWithIgnore
  exports?: _StylisticCommaDangleValueWithIgnore
  functions?: _StylisticCommaDangleValueWithIgnore
  importAttributes?: _StylisticCommaDangleValueWithIgnore
  dynamicImports?: _StylisticCommaDangleValueWithIgnore
  enums?: _StylisticCommaDangleValueWithIgnore
  generics?: _StylisticCommaDangleValueWithIgnore
  tuples?: _StylisticCommaDangleValueWithIgnore
})]
export type _StylisticCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
export type _StylisticCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")

export type StylisticCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]

export type StylisticCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]

export type StylisticComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]

export type StylisticCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]

export type StylisticDotLocation = []|[("object" | "property")]

export type StylisticEolLast = []|[("always" | "never" | "unix" | "windows")]

export type StylisticFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]

export type StylisticFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])

export type StylisticFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]

export type StylisticGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]

export type StylisticImplicitArrowLinebreak = []|[("beside" | "below")]

export type StylisticIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
    using?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]

export type StylisticIndentBinaryOps = []|[(number | "tab")]

export type StylisticJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]

export type StylisticJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]

export type StylisticJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]

export type StylisticJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]

export type StylisticJsxCurlySpacing = []|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never"))]|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
}]

export type StylisticJsxEqualsSpacing = []|[("always" | "never")]

export type StylisticJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]

export type StylisticJsxFunctionCallNewline = []|[("always" | "multiline")]

export type StylisticJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]

export type StylisticJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
})]

export type StylisticJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]

export type StylisticJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]

export type StylisticJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]

export type StylisticJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]

export type StylisticJsxQuotes = []|[("prefer-single" | "prefer-double")]

export type StylisticJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]

export type StylisticJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (string[] | boolean)
  reservedLast?: string[]
  locale?: string
}]

export type StylisticJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]

export type StylisticJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]

export type StylisticKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]

export type StylisticKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    accessor?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    using?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
  }
}]

export type StylisticLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]

export type StylisticLinebreakStyle = []|[("unix" | "windows")]

export type StylisticLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]

export type StylisticLinesBetweenClassMembers = []|[({
  /**
   * @minItems 1
   */
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  /**
   * @minItems 1
   */
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]

export type StylisticMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]

export type StylisticMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]

export type StylisticMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]

export interface _StylisticMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}

export type StylisticMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
  checkExclamation?: boolean
}])

export type StylisticMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
}]

export type StylisticNewParens = []|[("always" | "never")]

export type StylisticNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]

export type StylisticNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]

export type StylisticNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
  allowNodesInSpreadElement?: {
    ConditionalExpression?: boolean
    LogicalExpression?: boolean
    AwaitExpression?: boolean
  }
}])

export type StylisticNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]

export type StylisticNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]

export type StylisticNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]

export type StylisticNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]

export type StylisticNoTabs = []|[{
  allowIndentationTabs?: boolean
}]

export type StylisticNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]

export type StylisticNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]

export type StylisticObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]

export type StylisticObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]

export type StylisticObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]

export type StylisticOneVarDeclarationPerLine = []|[("always" | "initializations")]

export type StylisticOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]

export type StylisticPaddedBlocks = []|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
})]|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
}), {
  allowSingleLineBlocks?: boolean
}]

export type _StylisticPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
export type _StylisticPaddingLineBetweenStatementsStatementOption = (_StylisticPaddingLineBetweenStatementsStatementType | [_StylisticPaddingLineBetweenStatementsStatementType, ...(_StylisticPaddingLineBetweenStatementsStatementType)[]])
export type _StylisticPaddingLineBetweenStatementsStatementType = ("*" | "exports" | "require" | "directive" | "iife" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "continue" | "debugger" | "default" | "do" | "for" | "if" | "import" | "return" | "switch" | "throw" | "try" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload" | "block-like" | "singleline-block-like" | "multiline-block-like" | "expression" | "singleline-expression" | "multiline-expression" | "export" | "singleline-export" | "multiline-export" | "var" | "singleline-var" | "multiline-var" | "let" | "singleline-let" | "multiline-let" | "const" | "singleline-const" | "multiline-const" | "using" | "singleline-using" | "multiline-using")
export type StylisticPaddingLineBetweenStatements = {
  blankLine: _StylisticPaddingLineBetweenStatementsPaddingType
  prev: _StylisticPaddingLineBetweenStatementsStatementOption
  next: _StylisticPaddingLineBetweenStatementsStatementOption
}[]

export type StylisticQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])

export type StylisticQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]

export type StylisticRestSpreadSpacing = []|[("always" | "never")]

export type StylisticSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])

export type StylisticSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]

export type StylisticSemiStyle = []|[("last" | "first")]

export type StylisticSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
  modules?: ("always" | "never" | "off")
})]

export type StylisticSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
  catch?: ("always" | "never" | "ignore")
})]

export type StylisticSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]

export type StylisticSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]

export type StylisticSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]

export type StylisticSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]

export type StylisticSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]

export type StylisticTemplateCurlySpacing = []|[("always" | "never")]

export type StylisticTemplateTagSpacing = []|[("always" | "never")]

export type StylisticTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTypeAnnotationSpacing_SpacingConfig
    arrow?: _StylisticTypeAnnotationSpacing_SpacingConfig
    variable?: _StylisticTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTypeAnnotationSpacing_SpacingConfig
  }
}]

export interface _StylisticTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}

export type StylisticWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]

export type StylisticYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]

export type TypescriptEslintArrayType = []|[{
  /**
   * The array type expected for mutable cases.
   */
  default?: ("array" | "generic" | "array-simple")
  /**
   * The array type expected for readonly cases. If omitted, the value for `default` will be used.
   */
  readonly?: ("array" | "generic" | "array-simple")
}]

export type TypescriptEslintBanTsComment = []|[{
  /**
   * A minimum character length for descriptions when `allow-with-description` is enabled.
   */
  minimumDescriptionLength?: number
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]

export type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]

export type TypescriptEslintClassMethodsUseThis = []|[{
  /**
   * Enforces that functions used as instance field initializers utilize `this`.
   */
  enforceForClassFields?: boolean
  /**
   * Allows specified method names to be ignored with this rule.
   */
  exceptMethods?: string[]
  /**
   * Whether to ignore class members that are defined within a class that `implements` a type.
   */
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  /**
   * Whether to ignore members marked with the `override` modifier.
   */
  ignoreOverrideMethods?: boolean
}]

export type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]

export type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]

export type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]

export type TypescriptEslintConsistentTypeAssertions = []|[({
  /**
   * The expected assertion style to enforce.
   */
  assertionStyle: "never"
} | {
  /**
   * Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions.
   */
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  /**
   * The expected assertion style to enforce.
   */
  assertionStyle?: ("as" | "angle-bracket")
  /**
   * Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions.
   */
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]

export type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]

export type TypescriptEslintConsistentTypeExports = []|[{
  /**
   * Whether the rule will autofix "mixed" export cases using TS inline type specifiers.
   */
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]

export type TypescriptEslintConsistentTypeImports = []|[{
  /**
   * Whether to disallow type imports in type annotations (`import()`).
   */
  disallowTypeAnnotations?: boolean
  /**
   * The expected type modifier to be added when an import is detected as used only in the type position.
   */
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  /**
   * The expected import kind for type-only imports.
   */
  prefer?: ("type-imports" | "no-type-imports")
}]

export type TypescriptEslintDotNotation = []|[{
  /**
   * Whether to allow accessing properties matching an index signature with array notation.
   */
  allowIndexSignaturePropertyAccess?: boolean
  /**
   * Whether to allow keywords such as ["class"]`.
   */
  allowKeywords?: boolean
  /**
   * Regular expression of names to allow.
   */
  allowPattern?: string
  /**
   * Whether to allow accessing class members marked as `private` with array notation.
   */
  allowPrivateClassPropertyAccess?: boolean
  /**
   * Whether to allow accessing class members marked as `protected` with array notation.
   */
  allowProtectedClassPropertyAccess?: boolean
}]

export type TypescriptEslintExplicitFunctionReturnType = []|[{
  /**
   * Whether to allow arrow functions that start with the `void` keyword.
   */
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  /**
   * Whether to ignore arrow functions immediately returning a `as const` value.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[]
  /**
   * Whether to ignore function expressions (functions which are not part of a declaration).
   */
  allowExpressions?: boolean
  /**
   * Whether to ignore functions that don't have generic type parameters.
   */
  allowFunctionsWithoutTypeParameters?: boolean
  /**
   * Whether to ignore functions immediately returning another function expression.
   */
  allowHigherOrderFunctions?: boolean
  /**
   * Whether to ignore immediately invoked function expressions (IIFEs).
   */
  allowIIFEs?: boolean
  /**
   * Whether to ignore type annotations on the variable of function expressions.
   */
  allowTypedFunctionExpressions?: boolean
}]

export type TypescriptEslintExplicitMemberAccessibility = []|[{
  /**
   * Which accessibility modifier is required to exist or not exist.
   */
  accessibility?: ("explicit" | "no-public" | "off")
  /**
   * Specific method names that may be ignored.
   */
  ignoredMethodNames?: string[]
  /**
   * Changes to required accessibility modifiers for specific kinds of class members.
   */
  overrides?: {
    accessors?: ("explicit" | "no-public" | "off")
    constructors?: ("explicit" | "no-public" | "off")
    methods?: ("explicit" | "no-public" | "off")
    parameterProperties?: ("explicit" | "no-public" | "off")
    properties?: ("explicit" | "no-public" | "off")
  }
}]

export type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  /**
   * Whether to ignore arguments that are explicitly typed as `any`.
   */
  allowArgumentsExplicitlyTypedAsAny?: boolean
  /**
   * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
   * You must still type the parameters of the function.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[]
  /**
   * Whether to ignore return type annotations on functions immediately returning another function expression.
   * You must still type the parameters of the function.
   */
  allowHigherOrderFunctions?: boolean
  /**
   * Whether to ignore return type annotations on functions with overload signatures.
   */
  allowOverloadFunctions?: boolean
  /**
   * Whether to ignore type annotations on the variable of a function expression.
   */
  allowTypedFunctionExpressions?: boolean
}]

export type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])

export type TypescriptEslintMaxParams = []|[{
  /**
   * Whether to count a `this` declaration when the type is `void`.
   */
  countVoidThis?: boolean
  /**
   * A maximum number of parameters in function definitions.
   */
  max?: number
  /**
   * (deprecated) A maximum number of parameters in function definitions.
   */
  maximum?: number
}]

export type TypescriptEslintMemberOrdering = []|[{
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]

export type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]

export type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
export type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
export type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
export type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
export type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
export type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]

export interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}

export type TypescriptEslintNoBaseToString = []|[{
  /**
   * Whether to also check values of type `unknown`
   */
  checkUnknown?: boolean
  /**
   * Stringified regular expressions of type names to ignore.
   */
  ignoredTypeNames?: string[]
}]

export type TypescriptEslintNoConfusingVoidExpression = []|[{
  /**
   * Whether to ignore "shorthand" `() =>` arrow functions: those without `{ ... }` braces.
   */
  ignoreArrowShorthand?: boolean
  /**
   * Whether to ignore returns that start with the `void` operator.
   */
  ignoreVoidOperator?: boolean
  /**
   * Whether to ignore returns from functions with explicit `void` return types and functions with contextual `void` return types.
   */
  ignoreVoidReturningFunctions?: boolean
}]

export type TypescriptEslintNoDeprecated = []|[{
  /**
   * Type specifiers that can be allowed.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]

export type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  /**
   * Whether to ignore `&` intersections.
   */
  ignoreIntersections?: boolean
  /**
   * Whether to ignore `|` unions.
   */
  ignoreUnions?: boolean
}]

export type TypescriptEslintNoEmptyFunction = []|[{
  /**
   * Locations and kinds of functions that are allowed to be empty.
   */
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]

export type TypescriptEslintNoEmptyInterface = []|[{
  /**
   * Whether to allow empty interfaces that extend a single other interface.
   */
  allowSingleExtends?: boolean
}]

export type TypescriptEslintNoEmptyObjectType = []|[{
  /**
   * Whether to allow empty interfaces.
   */
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  /**
   * Whether to allow empty object type literals.
   */
  allowObjectTypes?: ("always" | "never")
  /**
   * A stringified regular expression to allow interfaces and object type aliases with the configured name.
   */
  allowWithName?: string
}]

export type TypescriptEslintNoExplicitAny = []|[{
  /**
   * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
   */
  fixToUnknown?: boolean
  /**
   * Whether to ignore rest parameter arrays.
   */
  ignoreRestArgs?: boolean
}]

export type TypescriptEslintNoExtraneousClass = []|[{
  /**
   * Whether to allow extraneous classes that contain only a constructor.
   */
  allowConstructorOnly?: boolean
  /**
   * Whether to allow extraneous classes that have no body (i.e. are empty).
   */
  allowEmpty?: boolean
  /**
   * Whether to allow extraneous classes that only contain static members.
   */
  allowStaticOnly?: boolean
  /**
   * Whether to allow extraneous classes that include a decorator.
   */
  allowWithDecorator?: boolean
}]

export type TypescriptEslintNoFloatingPromises = []|[{
  /**
   * Type specifiers of functions whose calls are safe to float.
   */
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Type specifiers that are known to be safe to float.
   */
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to check all "Thenable"s, not just the built-in Promise type.
   */
  checkThenables?: boolean
  /**
   * Whether to ignore async IIFEs (Immediately Invoked Function Expressions).
   */
  ignoreIIFE?: boolean
  /**
   * Whether to ignore `void` expressions.
   */
  ignoreVoid?: boolean
}]

export type TypescriptEslintNoInferrableTypes = []|[{
  /**
   * Whether to ignore function parameters.
   */
  ignoreParameters?: boolean
  /**
   * Whether to ignore class properties.
   */
  ignoreProperties?: boolean
}]

export type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]

export type TypescriptEslintNoInvalidVoidType = []|[{
  /**
   * Whether a `this` parameter of a function may be `void`.
   */
  allowAsThisParameter?: boolean
  /**
   * Whether `void` can be used as a valid value for generic type parameters.
   */
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]

export type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  /**
   * Whether enums used in TypeScript are considered okay.
   */
  ignoreEnums?: boolean
  /**
   * Whether numbers used in TypeScript numeric literal types are considered okay.
   */
  ignoreNumericLiteralTypes?: boolean
  /**
   * Whether `readonly` class properties are considered okay.
   */
  ignoreReadonlyClassProperties?: boolean
  /**
   * Whether numbers used to index types are okay.
   */
  ignoreTypeIndexes?: boolean
}]

export type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  /**
   * Whether to suggest removing `void` when the argument has type `never`.
   */
  checkNever?: boolean
}]

export type TypescriptEslintNoMisusedPromises = []|[{
  /**
   * Whether to warn when a Promise is provided to conditional statements.
   */
  checksConditionals?: boolean
  /**
   * Whether to warn when `...` spreading a `Promise`.
   */
  checksSpreads?: boolean
  /**
   * Whether to warn when a Promise is returned from a function typed as returning `void`.
   */
  checksVoidReturn?: (boolean | {
    /**
     * Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns `void`.
     */
    arguments?: boolean
    /**
     * Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns `void`.
     */
    attributes?: boolean
    /**
     * Disables checking an asynchronous method in a type that extends or implements another type expecting that method to return `void`.
     */
    inheritedMethods?: boolean
    /**
     * Disables checking an asynchronous function passed as an object property expected to be a function that returns `void`.
     */
    properties?: boolean
    /**
     * Disables checking an asynchronous function returned in a function whose return type is a function that returns `void`.
     */
    returns?: boolean
    /**
     * Disables checking an asynchronous function used as a variable whose return type is a function that returns `void`.
     */
    variables?: boolean
  })
}]

export type TypescriptEslintNoMisusedSpread = []|[{
  /**
   * An array of type specifiers that are known to be safe to spread.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]

export type TypescriptEslintNoNamespace = []|[{
  /**
   * Whether to allow `declare` with custom TypeScript namespaces.
   */
  allowDeclarations?: boolean
  /**
   * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
   */
  allowDefinitionFiles?: boolean
}]

export type TypescriptEslintNoRedeclare = []|[{
  /**
   * Whether to report shadowing of built-in global variables.
   */
  builtinGlobals?: boolean
  /**
   * Whether to ignore declaration merges between certain TypeScript declaration types.
   */
  ignoreDeclarationMerge?: boolean
}]

export type TypescriptEslintNoRequireImports = []|[{
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[]
  /**
   * Allows `require` statements in import declarations.
   */
  allowAsImport?: boolean
}]

export type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  /**
   * Whether to allow type-only imports for a path.
   */
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    /**
     * Whether to allow type-only imports for a path.
     */
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    /**
     * @minItems 1
     */
    importNames?: [string, ...(string)[]]
    /**
     * @minItems 1
     */
    allowImportNames?: [string, ...(string)[]]
    /**
     * @minItems 1
     */
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    /**
     * Whether to allow type-only imports for a path.
     */
    allowTypeImports?: boolean
  }[])
}])

export type TypescriptEslintNoRestrictedTypes = []|[{
  /**
   * An object whose keys are the types you want to ban, and the values are error messages.
   */
  types?: {
    [k: string]: (true | string | {
      /**
       * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
       */
      fixWith?: string
      /**
       * Custom error message.
       */
      message?: string
      /**
       * Types to suggest replacing with.
       */
      suggest?: string[]
    }) | undefined
  }
}]

export type TypescriptEslintNoShadow = []|[{
  /**
   * Identifier names for which shadowing is allowed.
   */
  allow?: string[]
  /**
   * Whether to report shadowing of built-in global variables.
   */
  builtinGlobals?: boolean
  /**
   * Whether to report shadowing before outer functions or variables are defined.
   */
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  /**
   * Whether to ignore function parameters named the same as a variable.
   */
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  /**
   * Whether to ignore the variable initializers when the shadowed variable is presumably still unitialized.
   */
  ignoreOnInitialization?: boolean
  /**
   * Whether to ignore types named the same as a variable.
   */
  ignoreTypeValueShadow?: boolean
}]

export type TypescriptEslintNoThisAlias = []|[{
  /**
   * Whether to ignore destructurings, such as `const { props, state } = this`.
   */
  allowDestructuring?: boolean
  /**
   * Names to ignore, such as ["self"] for `const self = this;`.
   */
  allowedNames?: string[]
}]

export type TypescriptEslintNoTypeAlias = []|[{
  /**
   * Whether to allow direct one-to-one type aliases.
   */
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  /**
   * Whether to allow type aliases for callbacks.
   */
  allowCallbacks?: ("always" | "never")
  /**
   * Whether to allow type aliases for conditional types.
   */
  allowConditionalTypes?: ("always" | "never")
  /**
   * Whether to allow type aliases with constructors.
   */
  allowConstructors?: ("always" | "never")
  /**
   * Whether to allow type aliases with generic types.
   */
  allowGenerics?: ("always" | "never")
  /**
   * Whether to allow type aliases with object literal types.
   */
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  /**
   * Whether to allow type aliases with mapped types.
   */
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  /**
   * Whether to allow type aliases with tuple types.
   */
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]

export type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  /**
   * Whether to allow comparisons between nullable boolean variables and `false`.
   */
  allowComparingNullableBooleansToFalse?: boolean
  /**
   * Whether to allow comparisons between nullable boolean variables and `true`.
   */
  allowComparingNullableBooleansToTrue?: boolean
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]

export type TypescriptEslintNoUnnecessaryCondition = []|[{
  /**
   * Whether to ignore constant loop conditions, such as `while (true)`.
   */
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  /**
   * Whether to not error when running with a tsconfig that has strictNullChecks turned.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  /**
   * Whether to check the asserted argument of a type predicate function for unnecessary conditions
   */
  checkTypePredicates?: boolean
}]

export type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  /**
   * Whether to check literal const assertions.
   */
  checkLiteralConstAssertions?: boolean
  /**
   * A list of type names to ignore.
   */
  typesToIgnore?: string[]
}]

export type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]

export type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  /**
   * Whether to check all, some, or no arguments.
   */
  args?: ("all" | "after-used" | "none")
  /**
   * Regular expressions of argument names to not check for usage.
   */
  argsIgnorePattern?: string
  /**
   * Whether to check catch block arguments.
   */
  caughtErrors?: ("all" | "none")
  /**
   * Regular expressions of catch block argument names to not check for usage.
   */
  caughtErrorsIgnorePattern?: string
  /**
   * Regular expressions of destructured array variable names to not check for usage.
   */
  destructuredArrayIgnorePattern?: string
  /**
   * Whether to ignore classes with at least one static initialization block.
   */
  ignoreClassWithStaticInitBlock?: boolean
  /**
   * Whether to ignore sibling properties in `...` destructurings.
   */
  ignoreRestSiblings?: boolean
  /**
   * Whether to report variables that match any of the valid ignore pattern options if they have been used.
   */
  reportUsedIgnorePattern?: boolean
  /**
   * Whether to check all variables or only locally-declared variables.
   */
  vars?: ("all" | "local")
  /**
   * Regular expressions of variable names to not check for usage.
   */
  varsIgnorePattern?: string
})]

export type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  /**
   * Whether to ignore named exports.
   */
  allowNamedExports?: boolean
  /**
   * Whether to ignore references to class declarations.
   */
  classes?: boolean
  /**
   * Whether to check references to enums.
   */
  enums?: boolean
  /**
   * Whether to ignore references to function declarations.
   */
  functions?: boolean
  /**
   * Whether to ignore type references, such as in type annotations and assertions.
   */
  ignoreTypeReferences?: boolean
  /**
   * Whether to check references to types.
   */
  typedefs?: boolean
  /**
   * Whether to ignore references to variables.
   */
  variables?: boolean
})]

export type TypescriptEslintNoVarRequires = []|[{
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[]
}]

export type TypescriptEslintOnlyThrowError = []|[{
  /**
   * Type specifiers that can be thrown.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to allow rethrowing caught values that are not `Error` objects.
   */
  allowRethrowing?: boolean
  /**
   * Whether to always allow throwing values typed as `any`.
   */
  allowThrowingAny?: boolean
  /**
   * Whether to always allow throwing values typed as `unknown`.
   */
  allowThrowingUnknown?: boolean
}]

export type TypescriptEslintParameterProperties = []|[{
  /**
   * Whether to allow certain kinds of properties to be ignored.
   */
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  /**
   * Whether to prefer class properties or parameter properties.
   */
  prefer?: ("class-property" | "parameter-property")
}]

export type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  /**
   * Whether to enforce destructuring on variable declarations with type annotations.
   */
  enforceForDeclarationWithTypeAnnotation?: boolean
  /**
   * Whether to enforce destructuring that use a different variable name than the property name.
   */
  enforceForRenamedProperties?: boolean
}]

export type TypescriptEslintPreferLiteralEnumMember = []|[{
  /**
   * Whether to allow using bitwise expressions in enum initializers.
   */
  allowBitwiseExpressions?: boolean
}]

export type TypescriptEslintPreferNullishCoalescing = []|[{
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  /**
   * Whether to ignore arguments to the `Boolean` constructor
   */
  ignoreBooleanCoercion?: boolean
  /**
   * Whether to ignore cases that are located within a conditional test.
   */
  ignoreConditionalTests?: boolean
  /**
   * Whether to ignore any if statements that could be simplified by using the nullish coalescing operator.
   */
  ignoreIfStatements?: boolean
  /**
   * Whether to ignore any logical or expressions that are part of a mixed logical expression (with `&&`).
   */
  ignoreMixedLogicalExpressions?: boolean
  /**
   * Whether to ignore all (`true`) or some (an object with properties) primitive types.
   */
  ignorePrimitives?: ({
    /**
     * Ignore bigint primitive types.
     */
    bigint?: boolean
    /**
     * Ignore boolean primitive types.
     */
    boolean?: boolean
    /**
     * Ignore number primitive types.
     */
    number?: boolean
    /**
     * Ignore string primitive types.
     */
    string?: boolean
  } | true)
  /**
   * Whether to ignore any ternary expressions that could be simplified by using the nullish coalescing operator.
   */
  ignoreTernaryTests?: boolean
}]

export type TypescriptEslintPreferOptionalChain = []|[{
  /**
   * Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.
   */
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  /**
   * Check operands that are typed as `any` when inspecting "loose boolean" operands.
   */
  checkAny?: boolean
  /**
   * Check operands that are typed as `bigint` when inspecting "loose boolean" operands.
   */
  checkBigInt?: boolean
  /**
   * Check operands that are typed as `boolean` when inspecting "loose boolean" operands.
   */
  checkBoolean?: boolean
  /**
   * Check operands that are typed as `number` when inspecting "loose boolean" operands.
   */
  checkNumber?: boolean
  /**
   * Check operands that are typed as `string` when inspecting "loose boolean" operands.
   */
  checkString?: boolean
  /**
   * Check operands that are typed as `unknown` when inspecting "loose boolean" operands.
   */
  checkUnknown?: boolean
  /**
   * Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.
   */
  requireNullish?: boolean
}]

export type TypescriptEslintPreferPromiseRejectErrors = []|[{
  /**
   * Whether to allow calls to `Promise.reject()` with no arguments.
   */
  allowEmptyReject?: boolean
  /**
   * Whether to always allow throwing values typed as `any`.
   */
  allowThrowingAny?: boolean
  /**
   * Whether to always allow throwing values typed as `unknown`.
   */
  allowThrowingUnknown?: boolean
}]

export type TypescriptEslintPreferReadonly = []|[{
  /**
   * Whether to restrict checking only to members immediately assigned a lambda value.
   */
  onlyInlineLambdas?: boolean
}]

export type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  /**
   * An array of type specifiers to ignore.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to check class parameter properties.
   */
  checkParameterProperties?: boolean
  /**
   * Whether to ignore parameters which don't explicitly specify a type.
   */
  ignoreInferredTypes?: boolean
  /**
   * Whether to treat all mutable methods as though they are readonly.
   */
  treatMethodsAsReadonly?: boolean
}]

export type TypescriptEslintPreferStringStartsEndsWith = []|[{
  /**
   * Whether to allow equality checks against the first or last element of a string.
   */
  allowSingleElementEquality?: ("always" | "never")
}]

export type TypescriptEslintPromiseFunctionAsync = []|[{
  /**
   * Whether to consider `any` and `unknown` to be Promises.
   */
  allowAny?: boolean
  /**
   * Any extra names of classes or interfaces to be considered Promises.
   */
  allowedPromiseNames?: string[]
  /**
   * Whether to check arrow functions.
   */
  checkArrowFunctions?: boolean
  /**
   * Whether to check standalone function declarations.
   */
  checkFunctionDeclarations?: boolean
  /**
   * Whether to check inline function expressions
   */
  checkFunctionExpressions?: boolean
  /**
   * Whether to check methods on classes and object literals.
   */
  checkMethodDeclarations?: boolean
}]

export type TypescriptEslintRequireArraySortCompare = []|[{
  /**
   * Whether to ignore arrays in which all elements are strings.
   */
  ignoreStringArrays?: boolean
}]

export type TypescriptEslintRestrictPlusOperands = []|[{
  /**
   * Whether to allow `any` typed values.
   */
  allowAny?: boolean
  /**
   * Whether to allow `boolean` typed values.
   */
  allowBoolean?: boolean
  /**
   * Whether to allow potentially `null` or `undefined` typed values.
   */
  allowNullish?: boolean
  /**
   * Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.
   */
  allowNumberAndString?: boolean
  /**
   * Whether to allow `regexp` typed values.
   */
  allowRegExp?: boolean
  /**
   * Whether to skip compound assignments such as `+=`.
   */
  skipCompoundAssignments?: boolean
}]

export type TypescriptEslintRestrictTemplateExpressions = []|[{
  /**
   * Whether to allow `any` typed values in template expressions.
   */
  allowAny?: boolean
  /**
   * Whether to allow `array` typed values in template expressions.
   */
  allowArray?: boolean
  /**
   * Whether to allow `boolean` typed values in template expressions.
   */
  allowBoolean?: boolean
  /**
   * Whether to allow `nullish` typed values in template expressions.
   */
  allowNullish?: boolean
  /**
   * Whether to allow `number` typed values in template expressions.
   */
  allowNumber?: boolean
  /**
   * Whether to allow `regexp` typed values in template expressions.
   */
  allowRegExp?: boolean
  /**
   * Whether to allow `never` typed values in template expressions.
   */
  allowNever?: boolean
  /**
   * Types to allow in template expressions.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]

export type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]

export type TypescriptEslintSortTypeConstituents = []|[{
  /**
   * Whether to sort using case sensitive string comparisons.
   */
  caseSensitive?: boolean
  /**
   * Whether to check intersection types (`&`).
   */
  checkIntersections?: boolean
  /**
   * Whether to check union types (`|`).
   */
  checkUnions?: boolean
  /**
   * Ordering of the groups.
   */
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]

export type TypescriptEslintStrictBooleanExpressions = []|[{
  /**
   * Whether to allow `any`s in a boolean context.
   */
  allowAny?: boolean
  /**
   * Whether to allow nullable `boolean`s in a boolean context.
   */
  allowNullableBoolean?: boolean
  /**
   * Whether to allow nullable `enum`s in a boolean context.
   */
  allowNullableEnum?: boolean
  /**
   * Whether to allow nullable `number`s in a boolean context.
   */
  allowNullableNumber?: boolean
  /**
   * Whether to allow nullable `object`s, `symbol`s, and functions in a boolean context.
   */
  allowNullableObject?: boolean
  /**
   * Whether to allow nullable `string`s in a boolean context.
   */
  allowNullableString?: boolean
  /**
   * Whether to allow `number`s in a boolean context.
   */
  allowNumber?: boolean
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  /**
   * Whether to allow `string`s in a boolean context.
   */
  allowString?: boolean
}]

export type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  /**
   * If 'true', allow 'default' cases on switch statements with exhaustive cases.
   */
  allowDefaultCaseForExhaustiveSwitch?: boolean
  /**
   * If 'true', the 'default' clause is used to determine whether the switch statement is exhaustive for union type
   */
  considerDefaultExhaustiveForUnions?: boolean
  /**
   * Regular expression for a comment that can indicate an intentionally omitted default case.
   */
  defaultCaseCommentPattern?: string
  /**
   * If 'true', require a 'default' clause for switches on non-union types.
   */
  requireDefaultForNonUnion?: boolean
}]

export type TypescriptEslintTripleSlashReference = []|[{
  /**
   * What to enforce for `/// <reference lib="..." />` references.
   */
  lib?: ("always" | "never")
  /**
   * What to enforce for `/// <reference path="..." />` references.
   */
  path?: ("always" | "never")
  /**
   * What to enforce for `/// <reference types="..." />` references.
   */
  types?: ("always" | "never" | "prefer-import")
}]

export type TypescriptEslintTypedef = []|[{
  /**
   * Whether to enforce type annotations on variables declared using array destructuring.
   */
  arrayDestructuring?: boolean
  /**
   * Whether to enforce type annotations for parameters of arrow functions.
   */
  arrowParameter?: boolean
  /**
   * Whether to enforce type annotations on member variables of classes.
   */
  memberVariableDeclaration?: boolean
  /**
   * Whether to enforce type annotations on variables declared using object destructuring.
   */
  objectDestructuring?: boolean
  /**
   * Whether to enforce type annotations for parameters of functions and methods.
   */
  parameter?: boolean
  /**
   * Whether to enforce type annotations for properties of interfaces and types.
   */
  propertyDeclaration?: boolean
  /**
   * Whether to enforce type annotations for variable declarations, excluding array and object destructuring.
   */
  variableDeclaration?: boolean
  /**
   * Whether to ignore variable declarations for non-arrow and arrow functions.
   */
  variableDeclarationIgnoreFunction?: boolean
}]

export type TypescriptEslintUnboundMethod = []|[{
  /**
   * Whether to skip checking whether `static` methods are correctly bound.
   */
  ignoreStatic?: boolean
}]

export type TypescriptEslintUnifiedSignatures = []|[{
  /**
   * Whether two parameters with different names at the same index should be considered different even if their types are the same.
   */
  ignoreDifferentlyNamedParameters?: boolean
  /**
   * Whether two overloads with different JSDoc comments should be considered different even if their parameter and return types are the same.
   */
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]

export type ImportXConsistentTypeSpecifierStyle = []|[("prefer-top-level" | "prefer-inline")]

export type ImportXDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]

export type ImportXExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}])

export type ImportXFirst = []|[("absolute-first" | "disable-absolute-first")]

export type ImportXImportsFirst = []|[("absolute-first" | "disable-absolute-first")]

export type ImportXMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]

export type ImportXNamed = []|[{
  commonjs?: boolean
}]

export type ImportXNamespace = []|[{
  /**
   * If `false`, will report computed (and thus, un-lintable) references to namespace members.
   */
  allowComputed?: boolean
}]

export type ImportXNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]

export type ImportXNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  /**
   * @minItems 1
   */
  ignore?: [string, ...(string)[]]
}]

export type ImportXNoAnonymousDefaultExport = []|[{
  /**
   * If `false`, will report default export of an array
   */
  allowArray?: boolean
  /**
   * If `false`, will report default export of an arrow function
   */
  allowArrowFunction?: boolean
  /**
   * If `false`, will report default export of a function call
   */
  allowCallExpression?: boolean
  /**
   * If `false`, will report default export of an anonymous class
   */
  allowAnonymousClass?: boolean
  /**
   * If `false`, will report default export of an anonymous function
   */
  allowAnonymousFunction?: boolean
  /**
   * If `false`, will report default export of a literal
   */
  allowLiteral?: boolean
  /**
   * If `false`, will report default export of an object expression
   */
  allowObject?: boolean
  /**
   * If `false`, will report default export of a class instantiation
   */
  allowNew?: boolean
}]

export type ImportXNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])

export type ImportXNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  /**
   * @minItems 1
   */
  ignore?: [string, ...(string)[]]
  maxDepth?: (number | "∞")
  /**
   * ignore external modules
   */
  ignoreExternal?: boolean
  /**
   * Allow cyclic dependency if there is at least one dynamic import in the chain
   */
  allowUnsafeDynamicCyclicDependency?: boolean
}]

export type ImportXNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]

export type ImportXNoDynamicRequire = []|[{
  esmodule?: boolean
}]

export type ImportXNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
  whitelist?: unknown[]
}]

export type ImportXNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]

export type ImportXNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]

export type ImportXNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]

export type ImportXNoNodejsModules = []|[{
  allow?: string[]
}]

export type ImportXNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  /**
   * @minItems 1
   */
  ignore?: [string, ...(string)[]]
}]

export type ImportXNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  /**
   * @minItems 1
   */
  ignore?: [string, ...(string)[]]
}]

export type ImportXNoRenameDefault = []|[{
  commonjs?: boolean
  preventRenamingBindings?: boolean
}]

export type ImportXNoRestrictedPaths = []|[{
  /**
   * @minItems 1
   */
  zones?: [{
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]

export type ImportXNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]

export type ImportXNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  /**
   * @minItems 1
   */
  ignore?: [string, ...(string)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]

export type ImportXNoUnusedModules = []|[({
  unusedExports: true
  /**
   * @minItems 1
   */
  src?: [unknown, ...(unknown)[]]
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]

export type ImportXNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]

export type ImportXOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  "newlines-between-types"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  consolidateIslands?: ("inside-groups" | "never")
  sortTypesGroup?: boolean
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]

export type ImportXPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]

export type ImportXPreferNamespaceImport = []|[{
  patterns?: string[]
}]

export type JsdocCheckExamples = []|[{
  allowInlineConfig?: boolean
  baseConfig?: {
    [k: string]: unknown | undefined
  }
  captionRequired?: boolean
  checkDefaults?: boolean
  checkEslintrc?: boolean
  checkParams?: boolean
  checkProperties?: boolean
  configFile?: string
  exampleCodeRegex?: string
  matchingFileName?: string
  matchingFileNameDefaults?: string
  matchingFileNameParams?: string
  matchingFileNameProperties?: string
  noDefaultExampleRules?: boolean
  paddedIndent?: number
  rejectExampleCodeRegex?: string
  reportUnusedDisableDirectives?: boolean
}]

export type JsdocCheckIndentation = []|[{
  excludeTags?: string[]
}]

export type JsdocCheckLineAlignment = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  customSpacings?: {
    postDelimiter?: number
    postHyphen?: number
    postName?: number
    postTag?: number
    postType?: number
  }
  disableWrapIndent?: boolean
  preserveMainDescriptionPostDelimiter?: boolean
  tags?: string[]
  wrapIndent?: string
}]

export type JsdocCheckParamNames = []|[{
  allowExtraTrailingParamDocs?: boolean
  checkDestructured?: boolean
  checkRestProperty?: boolean
  checkTypesPattern?: string
  disableExtraPropertyReporting?: boolean
  disableMissingParamChecks?: boolean
  enableFixer?: boolean
  useDefaultObjectProperties?: boolean
}]

export type JsdocCheckPropertyNames = []|[{
  enableFixer?: boolean
}]

export type JsdocCheckTagNames = []|[{
  definedTags?: string[]
  enableFixer?: boolean
  jsxTags?: boolean
  typed?: boolean
}]

export type JsdocCheckTypes = []|[{
  exemptTagContexts?: {
    tag?: string
    types?: (boolean | string[])
  }[]
  noDefaults?: boolean
  unifyParentAndChildTypeChecks?: boolean
}]

export type JsdocCheckValues = []|[{
  allowedAuthors?: string[]
  allowedLicenses?: (string[] | boolean)
  licensePattern?: string
  numericOnlyVariation?: boolean
}]

export type JsdocConvertToJsdocComments = []|[{
  allowedPrefixes?: string[]
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  contextsAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  contextsBeforeAndAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  enableFixer?: boolean
  enforceJsdocLineStyle?: ("multi" | "single")
  lineOrBlockStyle?: ("block" | "line" | "both")
}]

export type JsdocEmptyTags = []|[{
  tags?: string[]
}]

export type JsdocImplementsOnClasses = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]

export type JsdocInformativeDocs = []|[{
  aliases?: {
    [k: string]: string[]
  }
  excludedTags?: string[]
  uselessWords?: string[]
}]

export type JsdocLinesBeforeBlock = []|[{
  checkBlockStarts?: boolean
  excludedTags?: string[]
  ignoreSameLine?: boolean
  ignoreSingleLines?: boolean
  lines?: number
}]

export type JsdocMatchDescription = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  mainDescription?: (string | boolean | {
    match?: (string | boolean)
    message?: string
  })
  matchDescription?: string
  message?: string
  nonemptyTags?: boolean
  tags?: {
    [k: string]: (string | true | {
      match?: (string | true)
      message?: string
    })
  }
}]

export type JsdocMatchName = []|[{
  match: {
    allowName?: string
    comment?: string
    context?: string
    disallowName?: string
    message?: string
    replacement?: string
    tags?: string[]
  }[]
}]

export type JsdocMultilineBlocks = []|[{
  allowMultipleTags?: boolean
  minimumLengthForMultiline?: number
  multilineTags?: ("*" | string[])
  noFinalLineText?: boolean
  noMultilineBlocks?: boolean
  noSingleLineBlocks?: boolean
  noZeroLineText?: boolean
  requireSingleLineUnderCount?: number
  singleLineTags?: string[]
}]

export type JsdocNoBadBlocks = []|[{
  ignore?: string[]
  preventAllMultiAsteriskBlocks?: boolean
}]

export type JsdocNoBlankBlocks = []|[{
  enableFixer?: boolean
}]

export type JsdocNoDefaults = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  noOptionalParamNames?: boolean
}]

export type JsdocNoMissingSyntax = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
    message?: string
    minimum?: number
  })[]
}]

export type JsdocNoMultiAsterisks = []|[{
  allowWhitespace?: boolean
  preventAtEnd?: boolean
  preventAtMiddleLines?: boolean
}]

export type JsdocNoRestrictedSyntax = []|[{
  contexts: (string | {
    comment?: string
    context?: string
    message?: string
  })[]
}]

export type JsdocNoTypes = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]

export type JsdocNoUndefinedTypes = []|[{
  definedTypes?: string[]
  disableReporting?: boolean
  markVariablesAsUsed?: boolean
}]

export type JsdocRequireAsteriskPrefix = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  tags?: {
    always?: string[]
    any?: string[]
    never?: string[]
  }
}]

export type JsdocRequireDescription = []|[{
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  descriptionStyle?: ("body" | "tag" | "any")
  exemptedBy?: string[]
}]

export type JsdocRequireDescriptionCompleteSentence = []|[{
  abbreviations?: string[]
  newlineBeforeCapsAssumesBadSentenceEnd?: boolean
  tags?: string[]
}]

export type JsdocRequireExample = []|[{
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  enableFixer?: boolean
  exemptedBy?: string[]
  exemptNoArguments?: boolean
}]

export type JsdocRequireFileOverview = []|[{
  tags?: {
    [k: string]: {
      initialCommentsOnly?: boolean
      mustExist?: boolean
      preventDuplicates?: boolean
    }
  }
}]

export type JsdocRequireHyphenBeforeParamDescription = []|[("always" | "never")]|[("always" | "never"), {
  tags?: ({
    [k: string]: ("always" | "never")
  } | "any")
}]

export type JsdocRequireJsdoc = []|[{
  checkConstructors?: boolean
  checkGetters?: (boolean | "no-setter")
  checkSetters?: (boolean | "no-getter")
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
    minLineCount?: number
  })[]
  enableFixer?: boolean
  exemptEmptyConstructors?: boolean
  exemptEmptyFunctions?: boolean
  fixerMessage?: string
  minLineCount?: number
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
  require?: {
    ArrowFunctionExpression?: boolean
    ClassDeclaration?: boolean
    ClassExpression?: boolean
    FunctionDeclaration?: boolean
    FunctionExpression?: boolean
    MethodDefinition?: boolean
  }
}]

export type JsdocRequireParam = []|[{
  autoIncrementBase?: number
  checkConstructors?: boolean
  checkDestructured?: boolean
  checkDestructuredRoots?: boolean
  checkGetters?: boolean
  checkRestProperty?: boolean
  checkSetters?: boolean
  checkTypesPattern?: string
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  enableFixer?: boolean
  enableRestElementFixer?: boolean
  enableRootFixer?: boolean
  exemptedBy?: string[]
  ignoreWhenAllParamsMissing?: boolean
  unnamedRootBase?: string[]
  useDefaultObjectProperties?: boolean
}]

export type JsdocRequireParamDescription = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  defaultDestructuredRootDescription?: string
  setDefaultDestructuredRootDescription?: boolean
}]

export type JsdocRequireParamName = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]

export type JsdocRequireParamType = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  defaultDestructuredRootType?: string
  setDefaultDestructuredRootType?: boolean
}]

export type JsdocRequireReturns = []|[{
  checkConstructors?: boolean
  checkGetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
    forceRequireReturn?: boolean
  })[]
  enableFixer?: boolean
  exemptedBy?: string[]
  forceRequireReturn?: boolean
  forceReturnsWithAsync?: boolean
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
}]

export type JsdocRequireReturnsCheck = []|[{
  exemptAsync?: boolean
  exemptGenerators?: boolean
  reportMissingReturnForUndefinedTypes?: boolean
}]

export type JsdocRequireReturnsDescription = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]

export type JsdocRequireReturnsType = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]

export type JsdocRequireTemplate = []|[{
  requireSeparateTemplates?: boolean
}]

export type JsdocRequireThrows = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
}]

export type JsdocRequireYields = []|[{
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
  forceRequireNext?: boolean
  forceRequireYields?: boolean
  next?: boolean
  nextWithGeneratorTag?: boolean
  withGeneratorTag?: boolean
}]

export type JsdocRequireYieldsCheck = []|[{
  checkGeneratorsOnly?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
  next?: boolean
}]

export type JsdocSortTags = []|[{
  alphabetizeExtras?: boolean
  linesBetween?: number
  reportIntraTagGroupSpacing?: boolean
  reportTagGroupSpacing?: boolean
  tagSequence?: {
    tags?: string[]
  }[]
}]

export type JsdocTagLines = []|[("always" | "any" | "never")]|[("always" | "any" | "never"), {
  applyToEndTag?: boolean
  count?: number
  endLines?: (number | null)
  startLines?: (number | null)
  tags?: {
    [k: string]: {
      count?: number
      lines?: ("always" | "never" | "any")
    }
  }
}]

export type JsdocTextEscaping = []|[{
  escapeHTML?: boolean
  escapeMarkdown?: boolean
}]

export type JsdocValidTypes = []|[{
  allowEmptyNamepaths?: boolean
}]

export type JsoncArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]

export type JsoncArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]

export type JsoncArrayElementNewline = []|[(_JsoncArrayElementNewlineBasicConfig | {
  ArrayExpression?: _JsoncArrayElementNewlineBasicConfig
  JSONArrayExpression?: _JsoncArrayElementNewlineBasicConfig
  ArrayPattern?: _JsoncArrayElementNewlineBasicConfig
})]
export type _JsoncArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})

export type JsoncCommaDangle = []|[(_JsoncCommaDangleValue | {
  arrays?: _JsoncCommaDangleValueWithIgnore
  objects?: _JsoncCommaDangleValueWithIgnore
  imports?: _JsoncCommaDangleValueWithIgnore
  exports?: _JsoncCommaDangleValueWithIgnore
  functions?: _JsoncCommaDangleValueWithIgnore
})]
export type _JsoncCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
export type _JsoncCommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")

export type JsoncCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]

export type JsoncIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]

export type JsoncKeyNameCasing = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]

export type JsoncKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]

export type JsoncNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]

export type JsoncNoUselessEscape = []|[{
  allowRegexCharacters?: string[]
}]

export type JsoncObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]

export type JsoncObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]

export type JsoncObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]

export type JsoncQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])

export type JsoncQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]

/**
 * @minItems 1
 */
export type JsoncSortArrayValues = [{
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
}, ...({
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
})[]]

export type JsoncSortKeys = ([{
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}, ...({
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
})[]] | []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}])

export type JsoncSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]

export type PerfectionistSortArrayIncludes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Selector filter.
       */
      selector?: ("literal" | "spread")
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Selector filter.
     */
    selector?: ("literal" | "spread")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortClasses = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      /**
       * Selector filter.
       */
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    /**
     * Selector filter.
     */
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    /**
     * Regular expression.
     */
    decoratorNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Regular expression.
   */
  ignoreCallbackDependenciesPatterns?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}]

export type PerfectionistSortDecorators = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Controls whether sorting should be enabled for method parameter decorators.
   */
  sortOnParameters?: boolean
  /**
   * Controls whether sorting should be enabled for class property decorators.
   */
  sortOnProperties?: boolean
  /**
   * Controls whether sorting should be enabled for class accessor decorators.
   */
  sortOnAccessors?: boolean
  /**
   * Controls whether sorting should be enabled for class method decorators.
   */
  sortOnMethods?: boolean
  /**
   * Controls whether sorting should be enabled for class decorators.
   */
  sortOnClasses?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Specifies custom groups.
   */
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}]

export type PerfectionistSortEnums = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[])
  /**
   * Will always sort numeric enums by their value regardless of the sort type specified.
   */
  forceNumericSort?: boolean
  /**
   * Compare enum values instead of names.
   */
  sortByValue?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}]

export type PerfectionistSortExports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "values-first" | "types-first")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "export"
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("value" | "type")[]
    /**
     * Selector filter.
     */
    selector?: "export"
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortHeritageClauses = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Specifies custom groups.
   */
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}]

export type PerfectionistSortImports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    /**
     * Specifies custom groups for value imports.
     */
    value?: {
      [k: string]: (string | string[]) | undefined
    }
    /**
     * Specifies custom groups for type imports.
     */
    type?: {
      [k: string]: (string | string[]) | undefined
    }
  } | ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
      /**
       * Selector filter.
       */
      selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
    /**
     * Selector filter.
     */
    selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[])
  tsconfig?: {
    /**
     * Specifies the tsConfig root directory.
     */
    rootDir: string
    /**
     * Specifies the tsConfig filename.
     */
    filename?: string
  }
  /**
   * Specifies the maximum line length.
   */
  maxLineLength?: number
  /**
   * Controls whether side-effect imports should be sorted.
   */
  sortSideEffects?: boolean
  /**
   * Specifies the environment.
   */
  environment?: ("node" | "bun")
  /**
   * Specifies the tsConfig root directory.
   */
  tsconfigRootDir?: string
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Regular expression.
   */
  internalPattern?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortInterfaces = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("optional" | "required" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "required-first" | "optional-first")
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    declarationMatchesPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Regular expression.
   */
  ignorePattern?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortIntersectionTypes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Selector filter.
       */
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Selector filter.
     */
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortJsxProps = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("shorthand" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("multiline" | "prop" | "shorthand")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("shorthand" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("multiline" | "prop" | "shorthand")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[])
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    tagMatchesPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Regular expression.
   */
  ignorePattern?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortMaps = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortModules = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      /**
       * Selector filter.
       */
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
    /**
     * Selector filter.
     */
    selector?: ("enum" | "function" | "interface" | "type" | "class")
    /**
     * Regular expression.
     */
    decoratorNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}]

export type PerfectionistSortNamedExports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "values-first" | "types-first")
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "export"
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("value" | "type")[]
    /**
     * Selector filter.
     */
    selector?: "export"
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortNamedImports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "values-first" | "types-first")
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "import"
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("value" | "type")[]
    /**
     * Selector filter.
     */
    selector?: "import"
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortObjectTypes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("optional" | "required" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "required-first" | "optional-first")
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    declarationMatchesPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Regular expression.
   */
  ignorePattern?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortObjects = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Controls whether to sort destructured objects.
   */
  destructuredObjects?: (boolean | {
    /**
     * Controls whether to use groups to sort destructured objects.
     */
    groups?: boolean
  })
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("member" | "method" | "multiline" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Modifier filters.
     */
    modifiers?: ("optional" | "required" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("member" | "method" | "multiline" | "property")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[])
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    callingFunctionNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * [DEPRECATED] Controls whether to sort only destructured objects.
   */
  destructureOnly?: boolean
  /**
   * Controls whether to sort object declarations.
   */
  objectDeclarations?: boolean
  /**
   * Controls whether to sort styled components.
   */
  styledComponents?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Regular expression.
   */
  ignorePattern?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortSets = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * [DEPRECATED] Specifies top-level groups.
   */
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Selector filter.
       */
      selector?: ("literal" | "spread")
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Selector filter.
     */
    selector?: ("literal" | "spread")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortSwitchCase = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
}]

export type PerfectionistSortUnionTypes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Selector filter.
       */
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Selector filter.
     */
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}[]

export type PerfectionistSortVariableDeclarations = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      /**
       * Selector filter.
       */
      selector?: ("initialized" | "uninitialized")
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      /**
       * Specifies the sorting method.
       */
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    /**
     * Custom group name.
     */
    groupName: string
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    /**
     * Selector filter.
     */
    selector?: ("initialized" | "uninitialized")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
  })[]
}]

export type ReactHooksExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
}]

export type SvelteTypescriptEslintNoUnnecessaryCondition = []|[{
  /**
   * Whether to ignore constant loop conditions, such as `while (true)`.
   */
  allowConstantLoopConditions?: boolean
  /**
   * Whether to not error when running with a tsconfig that has strictNullChecks turned.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]

export type SvelteBlockLang = []|[{
  enforceScriptPresent?: boolean
  enforceStylePresent?: boolean
  script?: ((string | null) | [(string | null), ...((string | null))[]])
  style?: ((string | null) | [(string | null), ...((string | null))[]])
}]

export type SvelteButtonHasType = []|[{
  button?: boolean
  submit?: boolean
  reset?: boolean
}]

export type SvelteCommentDirective = []|[{
  reportUnusedDisableDirectives?: boolean
}]

export type SvelteConsistentSelectorStyle = []|[{
  checkGlobal?: boolean
  /**
   * @maxItems 3
   */
  style?: []|[("class" | "id" | "type")]|[("class" | "id" | "type"), ("class" | "id" | "type")]|[("class" | "id" | "type"), ("class" | "id" | "type"), ("class" | "id" | "type")]
}]

export type SvelteFirstAttributeLinebreak = []|[{
  multiline?: ("below" | "beside")
  singleline?: ("below" | "beside")
}]

export type SvelteHtmlClosingBracketNewLine = []|[{
  singleline?: ("always" | "never")
  multiline?: ("always" | "never")
  selfClosingTag?: {
    singleline?: ("always" | "never")
    multiline?: ("always" | "never")
  }
}]

export type SvelteHtmlClosingBracketSpacing = []|[{
  startTag?: ("always" | "never" | "ignore")
  endTag?: ("always" | "never" | "ignore")
  selfClosingTag?: ("always" | "never" | "ignore")
}]

export type SvelteHtmlQuotes = []|[{
  prefer?: ("double" | "single")
  dynamic?: {
    quoted?: boolean
    avoidInvalidUnquotedInHTML?: boolean
  }
}]

export type SvelteHtmlSelfClosing = []|[({
  void?: ("never" | "always" | "ignore")
  normal?: ("never" | "always" | "ignore")
  svg?: ("never" | "always" | "ignore")
  math?: ("never" | "always" | "ignore")
  component?: ("never" | "always" | "ignore")
  svelte?: ("never" | "always" | "ignore")
} | ("all" | "html" | "none"))]

export type SvelteIndent = []|[{
  indent?: (number | "tab")
  indentScript?: boolean
  switchCase?: number
  alignAttributesVertically?: boolean
  ignoredNodes?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
}]

export type SvelteMaxAttributesPerLine = []|[{
  multiline?: number
  singleline?: number
}]

export type SvelteMustacheSpacing = []|[{
  textExpressions?: ("never" | "always")
  attributesAndProps?: ("never" | "always")
  directiveExpressions?: ("never" | "always")
  tags?: {
    openingBrace?: ("never" | "always")
    closingBrace?: ("never" | "always" | "always-after-expression")
  }
}]

export type SvelteNoInlineStyles = []|[{
  allowTransitions?: boolean
}]

export type SvelteNoInnerDeclarations = []|[("functions" | "both")]|[("functions" | "both"), {
  blockScopedFunctions?: ("allow" | "disallow")
}]

export type SvelteNoNavigationWithoutBase = []|[{
  ignoreGoto?: boolean
  ignoreLinks?: boolean
  ignorePushState?: boolean
  ignoreReplaceState?: boolean
}]

export type SvelteNoReactiveReassign = []|[{
  props?: boolean
}]

/**
 * @minItems 1
 */
export type SvelteNoRestrictedHtmlElements = [(string | {
  /**
   * @minItems 1
   */
  elements?: [string, ...(string)[]]
  message?: string
}), ...((string | {
  /**
   * @minItems 1
   */
  elements?: [string, ...(string)[]]
  message?: string
}))[]]

export type SvelteNoTargetBlank = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
}]

export type SvelteNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]

export type SvelteNoUnknownStyleDirectiveProperty = []|[{
  /**
   * @minItems 1
   */
  ignoreProperties?: [string, ...(string)[]]
  ignorePrefixed?: boolean
}]

export type SvelteNoUnnecessaryStateWrap = []|[{
  additionalReactiveClasses?: string[]
  allowReassign?: boolean
}]

export type SvelteNoUnusedClassName = []|[{
  allowedClassNames?: string[]
}]

export type SvelteNoUnusedProps = []|[{
  checkImportedTypes?: boolean
  ignoreTypePatterns?: string[]
  ignorePropertyPatterns?: string[]
  allowUnusedNestedProperties?: boolean
}]

export type SvelteNoUselessMustaches = []|[{
  ignoreIncludesComment?: boolean
  ignoreStringEscape?: boolean
}]

export type SveltePreferClassDirective = []|[{
  prefer?: ("always" | "empty")
}]

export type SveltePreferConst = []|[{
  destructuring?: ("any" | "all")
  ignoreReadBeforeAssign?: boolean
  excludedRunes?: string[]
  [k: string]: unknown | undefined
}]

export type SvelteRequireEventPrefix = []|[{
  checkAsyncFunctions?: boolean
}]

export type SvelteShorthandAttribute = []|[{
  prefer?: ("always" | "never")
}]

export type SvelteShorthandDirective = []|[{
  prefer?: ("always" | "never")
}]

export type SvelteSortAttributes = []|[{
  order?: (string | [string, ...(string)[]] | {
    match: (string | [string, ...(string)[]])
    sort: ("alphabetical" | "ignore")
  })[]
  alphabetical?: boolean
}]

export type SvelteSpacedHtmlComment = []|[("always" | "never")]

export type SvelteValidCompile = []|[{
  ignoreWarnings?: boolean
}]
