To reproduce:

- `npm i`
- `lerna run build --scope @scope/shared`
- `npm run build:libs`

Then, the error:

```
@scope/using-shared: ✖ Compiling with Angular sources in Ivy partial compilation mode.
@scope/using-shared: src/lib/using-shared.module.ts:3:28 - error TS2307: Cannot find module '@scope/shared/core' or its corresponding type declarations.
@scope/using-shared:
@scope/using-shared: 3 import { CoreModule } from '@scope/shared/core';
@scope/using-shared:                              ~~~~~~~~~~~~~~~~~~~~
@scope/using-shared: src/lib/using-shared.module.ts:9:12 - error NG1010: Value at position 0 in the NgModule.imports of UsingSharedModule is not a reference
@scope/using-shared:   Value could not be determined statically.
@scope/using-shared:
@scope/using-shared:  9   imports: [
@scope/using-shared:               ~
@scope/using-shared: 10     CoreModule
@scope/using-shared:    ~~~~~~~~~~~~~~
@scope/using-shared: 11   ],
@scope/using-shared:    ~~~
@scope/using-shared:
@scope/using-shared:   src/lib/using-shared.module.ts:10:5
@scope/using-shared:     10     CoreModule
@scope/using-shared:            ~~~~~~~~~~
@scope/using-shared:     Unknown reference.
@scope/using-shared:
@scope/using-shared: npm ERR! Lifecycle script `build` failed with error:
@scope/using-shared: npm ERR! Error: command failed
@scope/using-shared: npm ERR!   in workspace: @scope/using-shared@0.0.1
@scope/using-shared: npm ERR!   at location: /Users/eestein/Documents/dev/other/lerna-repro-ng/lerna-repro-ng/projects/scope/using-shared

———————————————————————————————————————————————————————————————————————————————————

>  Lerna (powered by Nx)   Running target build for 2 projects failed

Failed tasks:

- @scope/using-shared:build
```
