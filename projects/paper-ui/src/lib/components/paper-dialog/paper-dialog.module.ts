import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaperDialogComponent } from 'projects/paper-ui/src/lib/components/paper-dialog/paper-dialog.component';

@NgModule({
  declarations: [PaperDialogComponent],
  imports: [CommonModule, BrowserModule],
  exports: [PaperDialogComponent],
})
export class PaperDialogModule {}
