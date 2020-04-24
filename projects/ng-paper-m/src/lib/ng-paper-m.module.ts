import { NgModule } from '@angular/core';
import { PaperMButtonModule } from './components/paper-m-button/paper-m-button.module';
import { PaperMDialogModule } from './components/paper-m-dialog/paper-m-dialog.module';

@NgModule({
  declarations: [],
  imports: [PaperMDialogModule, PaperMButtonModule],
  exports: [PaperMDialogModule, PaperMButtonModule],
})
export class NgPaperMModule {}
