import { NgModule } from '@angular/core';
import { PmUiInputModule } from 'projects/pm-ui/src/lib/components/pm-ui-input';
import { PmUiButtonModule } from './components/pm-ui-button/pm-ui-button.module';
import { PmUiCurtainsModule } from './components/pm-ui-curtains/pm-ui-curtains.module';
import { PmUiDialogModule } from './components/pm-ui-dialog/pm-ui-dialog.module';
import { PmUiEditorModule } from './components/pm-ui-editor/pm-ui-editor.module';
import { PmUiIconModule } from './components/pm-ui-icon/pm-ui-icon.module';
import { PmUiLazySusanModule } from './components/pm-ui-lazy-susan/pm-ui-lazy-susan.module';
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
    PmUiInputModule,
    PmUiLazySusanModule,
  ],
  exports: [
    PmUiDialogModule,
    PmUiButtonModule,
    PmUiIconModule,
    PmUiCurtainsModule,
    PmUiTableModule,
    PmUiSelectModule,
    PmUiEditorModule,
    PmUiInputModule,
    PmUiLazySusanModule,
  ],
})
export class PmUiModule {}
