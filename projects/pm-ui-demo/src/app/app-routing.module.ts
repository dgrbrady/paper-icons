import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from 'projects/pm-ui-demo/src/app/button-page/button-page.component';

export const routes: Routes = [
  { path: 'button', component: ButtonPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
