import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaperMDialogComponent } from './paper-m-dialog.component';

@NgModule({
  declarations: [PaperMDialogComponent],
  imports: [CommonModule, BrowserModule],
  exports: [PaperMDialogComponent],
})
export class PaperMDialogModule {}
