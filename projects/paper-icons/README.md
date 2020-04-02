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
  PaperIcon,
  PaperIconsModule,
  PaperIconsRegistry,
  PaperItems, // import all item icons
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
    this.paperIconRegistry.registerIcons(
      Object.values((PaperBadges as unknown) as PaperIcon[]),
    );
    this.paperIconRegistry.registerIcons(
      Object.values((PaperItems as unknown) as PaperIcon[]),
    );
  }
}
```

Once your icons are registered, you can use them in any component. The `PaperIconComponent` looks like this:

```html
<paper-icon name="icon_name" size="small | medium | large"></paper-icon>
```

Where `name` is the unique name for the icon and `size` is either `small`, `medium` or `large`. The size will render the icon SVG as 20px/20px, 30px/30px or 40px/40px, respectfully.

To see all the icons included in the library, check out the demo at https://paper-icons-showcase.netlify.com!
