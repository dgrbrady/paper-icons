import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from 'projects/pm-ui-demo/src/app/button-page/button-page.component';
import { CurtainPageComponent } from 'projects/pm-ui-demo/src/app/curtain-page/curtain-page.component';
import { DialogPageComponent } from 'projects/pm-ui-demo/src/app/dialog-page/dialog-page.component';
import { IntroPageComponent } from 'projects/pm-ui-demo/src/app/intro-page/intro-page.component';

export const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'button', component: ButtonPageComponent },
  { path: 'curtain', component: CurtainPageComponent },
  { path: 'dialog', component: DialogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
