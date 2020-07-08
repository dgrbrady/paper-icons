import { NgModule } from '@angular/core';
import { PmUiButtonModule } from './components/pm-ui-button/pm-ui-button.module';
import { PmUiCurtainsModule } from './components/pm-ui-curtains/pm-ui-curtains.module';
import { PmUiDialogModule } from './components/pm-ui-dialog/pm-ui-dialog.module';
import { PmUiEditorModule } from './components/pm-ui-editor/pm-ui-editor.module';
import { PmUiIconModule } from './components/pm-ui-icon/pm-ui-icon.module';
import { PmUiSelectModule } from './components/pm-ui-select/pm-ui-select.module';
import { PmUiTableModule } from './components/pm-ui-table/pm-ui-table.module';

@NgModule({
  imports: [
    PmUiDialogModule,
    PmUiButtonModule,
    PmUiIconModule,
    PmUiCurtainsModule,
    PmUiTableModule,
    PmUiSelectModule,
    PmUiEditorModule,
  ],
  exports: [
    PmUiDialogModule,
    PmUiButtonModule,
    PmUiIconModule,
    PmUiCurtainsModule,
    PmUiTableModule,
    PmUiSelectModule,
    PmUiEditorModule,
  ],
})
export class PmUiModule {}
