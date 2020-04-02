# PaperIcons

This repo contains an SVG icon pack that you can use in your Angular applications. The icons are clones of various badges and items found in Nintendo's Paper Mario The Thousand Year Door. I do not claim any rights to the images used in this library or the Paper Mario franchise. This is just a fun little icon pack not intended for commercial use.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Installation

`npm i paper-icons`

## Usage

First, register the icons you want to use.

```typescript
//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PaperBadges, // import all badge icons
  PaperIconsModule,
  PaperIconsRegistry,
  PaperItems, // import all item icons
  utils,
  // or import individual icons such as badgeIconAllOrNothing or itemIconSunStone
} from 'paper-icons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaperIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private paperIconRegistry: PaperIconsRegistry) {
    const icons = Object.values(PaperBadges).concat(Object.values(PaperItems));
    if (utils.hasPaperIcons(icons)) {
      this.paperIconRegistry.registerIcons(icons);
    }
  }
}
```

Once your icons are registered, you can use them in any component. The `PaperIconComponent` looks like this:

```html
<paper-icon name="icon_name" size="small | medium | large"></paper-icon>
```

Where `name` is the unique name for the icon and `size` is either `small`, `medium` or `large`. The size will render the icon SVG as 20px/20px, 30px/30px or 40px/40px, respectfully.

To see all the icons included in the library, you can serve the showcase site locally (see section below) or view the same site live at https://paper-icons-showcase.netlify.com

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
