import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PmUiCurtainsComponent,
  PmUiCurtainTabComponent,
} from './pm-ui-curtains.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [PmUiCurtainsComponent, PmUiCurtainTabComponent],
  declarations: [PmUiCurtainsComponent, PmUiCurtainTabComponent],
})
export class PmUiCurtainsModule {}
