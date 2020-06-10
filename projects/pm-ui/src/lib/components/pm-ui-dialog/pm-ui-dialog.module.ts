import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PmUiDialogComponent } from './pm-ui-dialog.component';

@NgModule({
  declarations: [PmUiDialogComponent],
  imports: [CommonModule, BrowserModule],
  exports: [PmUiDialogComponent],
})
export class PaperMDialogModule {}
