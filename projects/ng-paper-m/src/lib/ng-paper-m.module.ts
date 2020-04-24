import { NgModule } from '@angular/core';
import { PaperMIconModule } from 'projects/ng-paper-m/src/lib/components/paper-m-icon';
import { PaperMButtonModule } from './components/paper-m-button/paper-m-button.module';
import { PaperMDialogModule } from './components/paper-m-dialog/paper-m-dialog.module';

@NgModule({
  declarations: [],
  imports: [PaperMDialogModule, PaperMButtonModule, PaperMIconModule],
  exports: [PaperMDialogModule, PaperMButtonModule, PaperMIconModule],
})
export class NgPaperMModule {}
