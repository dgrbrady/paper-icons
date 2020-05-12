import { NgModule } from '@angular/core';
import { PaperMCurtainsModule } from 'projects/ng-paper-m/src/lib/components/paper-m-curtains/paper-m-curtains.module';
import { PaperMIconModule } from 'projects/ng-paper-m/src/lib/components/paper-m-icon';
import { PaperMButtonModule } from './components/paper-m-button/paper-m-button.module';
import { PaperMDialogModule } from './components/paper-m-dialog/paper-m-dialog.module';
import { PaperMTableModule } from './components/paper-m-table/paper-m-table.module';

@NgModule({
  imports: [
    PaperMDialogModule,
    PaperMButtonModule,
    PaperMIconModule,
    PaperMCurtainsModule,
    PaperMTableModule,
  ],
  exports: [
    PaperMDialogModule,
    PaperMButtonModule,
    PaperMIconModule,
    PaperMCurtainsModule,
    PaperMTableModule,
  ],
})
export class NgPaperMModule {}
