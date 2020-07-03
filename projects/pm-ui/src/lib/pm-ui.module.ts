import { NgModule } from '@angular/core';
import { PmUiButtonModule } from './components/pm-ui-button/pm-ui-button.module';
import { PmUiCurtainsModule } from './components/pm-ui-curtains/pm-ui-curtains.module';
import { PaperMDialogModule } from './components/pm-ui-dialog/pm-ui-dialog.module';
import { PmUiIconModule } from './components/pm-ui-icon/pm-ui-icon.module';
import { PmUiSelectModule } from './components/pm-ui-select/pm-ui-select.module';
import { PmUiTableModule } from './components/pm-ui-table/pm-ui-table.module';
import { PmUiTextareaModule } from './components/pm-ui-textarea/pm-ui-textarea.module';

@NgModule({
  imports: [
    PaperMDialogModule,
    PmUiButtonModule,
    PmUiIconModule,
    PmUiCurtainsModule,
    PmUiTableModule,
    PmUiSelectModule,
    PmUiTextareaModule,
  ],
  exports: [
    PaperMDialogModule,
    PmUiButtonModule,
    PmUiIconModule,
    PmUiCurtainsModule,
    PmUiTableModule,
    PmUiSelectModule,
    PmUiTextareaModule,
  ],
})
export class PmUiModule {}
