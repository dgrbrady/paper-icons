import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'projects/pm-ui-demo/src/app/app-routing.module';
import { PmUiModule } from '../../../pm-ui/src/public-api';
import { AppComponent } from './app.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { CurtainPageComponent } from './curtain-page/curtain-page.component';

@NgModule({
  declarations: [AppComponent, ButtonPageComponent, IntroPageComponent, CurtainPageComponent],
  imports: [BrowserModule, PmUiModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
