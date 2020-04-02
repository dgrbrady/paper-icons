import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PaperBadges,
  PaperIcon,
  PaperIconsModule,
  PaperIconsRegistry,
  PaperItems,
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
