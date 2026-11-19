# const enum import kept by @ngtools/webpack (build-angular 22.2.0+)

```
npm install
npm run build
```

Fails with:

```
./src/app/app.component.ts:1:0-34 - Error: export 'Period' (imported as 'Period') was not found in './period' (possible exports: PeriodFormatter)
```

`src/app/app.component.ts` imports a `const enum` (`Period`) and an injectable class (`PeriodFormatter`) in one
statement. `PeriodFormatter` is only used as a constructor parameter type, so `@ngtools/webpack` removes its
specifier and rewrites the import declaration. TypeScript skips its own import elision for a rewritten
declaration, so the `Period` specifier, which TypeScript would normally drop after inlining the const enum,
stays in the output, and webpack fails because a const enum has no runtime export.

| @angular/* | @angular-devkit/build-angular | result |
| --- | --- | --- |
| 22.1.8 | 22.1.9 | builds |
| 22.2.0 | 22.1.9 | builds |
| 22.1.8 | 22.2.0 | fails |
| 22.2.0 | 22.2.0 | fails |
| 22.2.4 – 22.2.6 | 22.2.4 – 22.2.7 | fails |
| 22.2.7 | 22.2.8 | fails |
| 22.3.0 | 22.3.0 | fails |

Not needed to reproduce: a barrel, tsconfig `paths`, or any non-default compiler option.
Workarounds: a regular `enum`, or importing the const enum in a separate import statement.
