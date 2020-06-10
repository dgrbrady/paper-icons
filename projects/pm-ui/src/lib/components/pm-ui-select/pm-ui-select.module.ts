import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PmUiSelectComponent } from './pm-ui-select.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [PmUiSelectComponent],
  declarations: [PmUiSelectComponent],
  providers: [],
})
export class PmUiSelectModule {}
