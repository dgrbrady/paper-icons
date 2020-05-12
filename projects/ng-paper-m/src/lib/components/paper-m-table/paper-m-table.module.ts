import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PaperMButtonModule } from 'projects/ng-paper-m/src/lib/components/paper-m-button';
import { PaperMIconModule } from 'projects/ng-paper-m/src/lib/components/paper-m-icon';
import { PaperMPaginatorComponent } from './paginator/paper-m-paginator.component';
import { PaperMTableComponent } from './paper-m-table.component';

@NgModule({
  imports: [
    CommonModule,
    PaperMIconModule,
    PaperMButtonModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [PaperMTableComponent, PaperMPaginatorComponent],
  declarations: [PaperMTableComponent, PaperMPaginatorComponent],
})
export class PaperMTableModule {}
