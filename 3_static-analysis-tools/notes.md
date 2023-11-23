# Static analysis tools

## 1. eslint

eslint is a static analysis tool for identifying problematic patterns found in
JavaScript code. It can be configured in the `.eslintrc` file. configurations
can vary and custom rules can be added. A rule with an `error` property will
fail the build if the rule is violated. This failure wil also fail pipeline
builds. A rule with a `warn` property will only warn the user if the rule is
violated. Using a babel plugin can help see errors in the editor.

We could configure all of these rules, but instead of configuring all of them we
can `extend` rules to use pre-build collections of rules. Rules that are defined
in the rules section override configuration provided rules.

## 2. Prettier

Prettier is a tool we use for automatic code formatting. It functions similarly
as eslint but its main objective is to format the code for us based on the
provided configuration. It can be configured in the `.prettierrc` file. It can
be used in conjunction with eslint by using the `eslint-plugin-prettier` plugin.
This plugin will run prettier as an eslint rule. This will allow us to use
prettier to format our code and eslint to catch errors.

## 3. Typescript

Typescript is a superset of javascript that adds static typing to the language.
It can be configured in the `tsconfig.json` file. It can be used in conjunction
with eslint by using the `@typescript-eslint/eslint-plugin` plugin. This plugin
will run typescript as an eslint rule. This will allow us to use typescript to
catch errors and eslint to catch errors.

## 4. Husky

Husky is a tool that allows us to run scripts before certain git events.
