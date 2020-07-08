import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PmUiButtonModule } from 'projects/pm-ui/src/lib/components/pm-ui-button';
import { PmUiIconModule } from 'projects/pm-ui/src/lib/components/pm-ui-icon';
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
