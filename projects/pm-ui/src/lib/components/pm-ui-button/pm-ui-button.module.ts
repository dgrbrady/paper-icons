import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PmUiDangerButtonDirective } from './directives/pm-ui-danger-button/pm-ui-danger-button.directive';
import { PmUiIconButtonDirective } from './directives/pm-ui-icon-button/pm-ui-icon-button.directive';
import { PmUiSuccessButtonDirective } from './directives/pm-ui-success-button/pm-ui-success-button.directive';
import { PmUiWarningButtonDirective } from './directives/pm-ui-warning-button/pm-ui-warning-button.directive';
import { PmUiButtonComponent } from './pm-ui-button.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [
    PmUiButtonComponent,
    PmUiIconButtonDirective,
    PmUiSuccessButtonDirective,
    PmUiDangerButtonDirective,
    PmUiWarningButtonDirective,
  ],
  declarations: [
    PmUiButtonComponent,
    PmUiIconButtonDirective,
    PmUiSuccessButtonDirective,
    PmUiDangerButtonDirective,
    PmUiWarningButtonDirective,
  ],
})
export class PmUiButtonModule {}
