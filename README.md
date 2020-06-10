# pm-ui

Welcome to the demo site for pm-ui, the Paper Mario inspired UI library! I
created this library because of how much I love the game's aesthetic. This
is just a little side project that I am using to learn different angular
concepts, explore UI/UX designs/patterns such as brutalism as well as
accessability. Feel free to use this library however you want. This site
offers documentation and examples for each component in the library. The
site itself is also built using these components. I do not claim any
rights/ownership of the Paper Mario franchise. All rights go to Nintendo.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Installation

`npm i pm-ui`

## Usage

If you want to have all `pm-ui` components available in your module, simply import the `PmUiModule` in your `NgModule`:

```typescript
// app.module.ts
import { PmUiModule } from '@pm-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PmUiModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

To view the documentation site live, go to `https://pm-ui.netlify.app`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
