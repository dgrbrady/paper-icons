import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PmUiModule } from '../../../pm-ui/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PmUiModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
