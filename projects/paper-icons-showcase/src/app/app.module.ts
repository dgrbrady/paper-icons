import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PaperBadges,
  PaperIconsModule,
  PaperIconsRegistry,
  PaperItems,
  utils,
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
