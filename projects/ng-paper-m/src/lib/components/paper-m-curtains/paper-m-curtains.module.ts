import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaperMCurtainsComponent } from './paper-m-curtains.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [PaperMCurtainsComponent],
  declarations: [PaperMCurtainsComponent],
})
export class PaperMCurtainsModule {}
