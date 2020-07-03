import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from 'projects/pm-ui-demo/src/app/button-page/button-page.component';
import { CurtainPageComponent } from 'projects/pm-ui-demo/src/app/curtain-page/curtain-page.component';
import { DialogPageComponent } from 'projects/pm-ui-demo/src/app/dialog-page/dialog-page.component';
import { IconPageComponent } from 'projects/pm-ui-demo/src/app/icon-page/icon-page.component';
import { IntroPageComponent } from 'projects/pm-ui-demo/src/app/intro-page/intro-page.component';
import { SelectPageComponent } from 'projects/pm-ui-demo/src/app/select-page/select-page.component';
import { TablePageComponent } from 'projects/pm-ui-demo/src/app/table-page/table-page.component';
import { TextareaPageComponent } from 'projects/pm-ui-demo/src/app/textarea-page/textarea-page.component';

export const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'button', component: ButtonPageComponent },
  { path: 'curtains', component: CurtainPageComponent },
  { path: 'dialog', component: DialogPageComponent },
  { path: 'icon', component: IconPageComponent },
  { path: 'select', component: SelectPageComponent },
  { path: 'table', component: TablePageComponent },
  { path: 'textarea', component: TextareaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
