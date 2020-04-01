import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  PaperIcons,
  PaperIconsModule,
  PaperIconsRegistry,
  utils
} from "projects/paper-icons/src/public-api";
import { AppComponent } from "./app.component";
// import { paperIcon } from 'projects/paper-icons/src/lib/paper-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaperIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private paperIconRegistry: PaperIconsRegistry) {
    const icons = Object.values(PaperIcons);
    if (utils.hasPaperIcons(icons)) {
      this.paperIconRegistry.registerIcons(icons);
    }
  }
}
