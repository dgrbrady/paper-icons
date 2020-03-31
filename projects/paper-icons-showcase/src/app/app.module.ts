import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  paperIconsAllorNothingP1,
  PaperIconsModule,
  PaperIconsRegistry
} from "projects/paper-icons/src/public-api";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaperIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private paperIconRegistry: PaperIconsRegistry) {
    this.paperIconRegistry.registerIcons([paperIconsAllorNothingP1]);
  }
}
