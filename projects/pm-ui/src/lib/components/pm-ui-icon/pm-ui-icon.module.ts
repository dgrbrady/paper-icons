import { NgModule } from '@angular/core';
import { PmUiBadgeIcons, PmUiItemIcons } from './icons';
import { PmUiIconComponent } from './pm-ui-icon.component';
import { PmUiIconService } from './pm-ui-icon.service';
import { PmUiIcon } from './pm-ui-icon.types';

@NgModule({
  declarations: [PmUiIconComponent],
  imports: [],
  exports: [PmUiIconComponent],
})
export class PmUiIconModule {
  constructor(private paperIconService: PmUiIconService) {
    this.paperIconService.registerIcons(
      Object.values((PmUiBadgeIcons as unknown) as PmUiIcon[]),
    );
    this.paperIconService.registerIcons(
      Object.values((PmUiItemIcons as unknown) as PmUiIcon[]),
    );
  }
}
