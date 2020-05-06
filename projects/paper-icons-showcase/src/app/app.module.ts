import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPaperMModule } from '../../../ng-paper-m/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgPaperMModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
