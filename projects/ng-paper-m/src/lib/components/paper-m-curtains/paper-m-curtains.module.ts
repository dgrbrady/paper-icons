import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PaperMCurtainsComponent,
  PaperMCurtainTabComponent,
} from './paper-m-curtains.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [PaperMCurtainsComponent, PaperMCurtainTabComponent],
  declarations: [PaperMCurtainsComponent, PaperMCurtainTabComponent],
})
export class PaperMCurtainsModule {}
