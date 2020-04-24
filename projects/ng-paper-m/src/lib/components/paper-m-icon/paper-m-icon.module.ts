import { NgModule } from '@angular/core';
import { PaperMIconService } from 'projects/ng-paper-m/src/public-api';
import { PaperBadges, PaperItems } from 'projects/paper-icons/src/lib/icons';
import { PaperIcon } from 'projects/paper-icons/src/public-api';
import { PaperMIconComponent } from './paper-m-icon.component';

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
