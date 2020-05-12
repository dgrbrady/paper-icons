import { NgModule } from '@angular/core';
import { PaperMIconService } from 'projects/ng-paper-m/src/public-api';
import { PaperBadges, PaperItems } from './icons';
import { PaperMIconComponent } from './paper-m-icon.component';
import { PaperIcon } from './paper-m-icon.types';

@NgModule({
  declarations: [PaperMIconComponent],
  imports: [],
  exports: [PaperMIconComponent],
})
export class PaperMIconModule {
  constructor(private paperIconService: PaperMIconService) {
    this.paperIconService.registerIcons(
      Object.values((PaperBadges as unknown) as PaperIcon[]),
    );
    this.paperIconService.registerIcons(
      Object.values((PaperItems as unknown) as PaperIcon[]),
    );
  }
}
