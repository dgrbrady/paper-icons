import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaperMDangerButtonDirective } from './directives/paper-m-danger-button/paper-m-danger-button.directive';
import { PaperMIconButtonDirective } from './directives/paper-m-icon-button/paper-m-icon-button.directive';
import { PaperMSuccessButtonDirective } from './directives/paper-m-success-button/paper-m-success-button.directive';
import { PaperMWarningButtonDirective } from './directives/paper-m-warning-button/paper-m-warning-button.directive';
import { PaperMButtonComponent } from './paper-m-button.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [
    PaperMButtonComponent,
    PaperMIconButtonDirective,
    PaperMSuccessButtonDirective,
    PaperMDangerButtonDirective,
    PaperMWarningButtonDirective,
  ],
  declarations: [
    PaperMButtonComponent,
    PaperMIconButtonDirective,
    PaperMSuccessButtonDirective,
    PaperMDangerButtonDirective,
    PaperMWarningButtonDirective,
  ],
})
export class PaperMButtonModule {}
