import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PmUiButtonModule } from '../pm-ui-button/pm-ui-button.module';
import { PmUiIconModule } from '../pm-ui-icon/pm-ui-icon.module';
import { PmUiEditorComponent } from './pm-ui-editor.component';

@NgModule({
  declarations: [PmUiEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    PmUiIconModule,
    PmUiButtonModule,
    RouterModule,
  ],
  exports: [PmUiEditorComponent],
})
export class PmUiEditorModule {}
