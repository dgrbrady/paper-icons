import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmUiLazySusanComponent } from './pm-ui-lazy-susan.component';
import { PmUiLazySusanItemDirective } from './directives/pm-ui-lazy-susan-item.directive';



@NgModule({
  declarations: [PmUiLazySusanComponent, PmUiLazySusanItemDirective],
  imports: [
    CommonModule
  ],
  exports: [PmUiLazySusanComponent, PmUiLazySusanItemDirective]
})
export class PmUiLazySusanModule { }
