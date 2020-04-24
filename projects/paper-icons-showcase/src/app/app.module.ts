import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPaperMModule } from '../../../ng-paper-m/src/public-api';
import {
  PaperBadges,
  PaperIcon,
  PaperIconsModule,
  PaperIconsRegistry,
  PaperItems,
} from '../../../paper-icons/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaperIconsModule, NgPaperMModule],
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
