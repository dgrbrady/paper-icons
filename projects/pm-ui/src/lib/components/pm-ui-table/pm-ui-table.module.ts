import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PmUiButtonModule } from '../pm-ui-button/pm-ui-button.module';
import { PmUiIconModule } from '../pm-ui-icon/pm-ui-icon.module';
import { PmUiPaginatorComponent } from './paginator/pm-ui-paginator.component';
import { PmUiTableComponent } from './pm-ui-table.component';

@NgModule({
  imports: [
    CommonModule,
    PmUiIconModule,
    PmUiButtonModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [PmUiTableComponent, PmUiPaginatorComponent],
  declarations: [PmUiTableComponent, PmUiPaginatorComponent],
})
export class PmUiTableModule {}
