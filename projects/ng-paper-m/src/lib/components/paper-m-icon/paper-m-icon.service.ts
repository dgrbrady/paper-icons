import { Injectable } from '@angular/core';
import { PaperIcon } from './paper-m-icon.types';

@Injectable({
  providedIn: 'root',
})
export class PaperMIconService {
  private registry = new Map<string, string>();

  public registerIcons(icons: PaperIcon[]): void {
    icons.forEach((icon: PaperIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the paper Icon with the name ${iconName}, did you add it to the Icon registry?`,
      );
    }
    return this.registry.get(iconName);
  }
}
