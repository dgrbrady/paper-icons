import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { PaperMIconService } from './paper-m-icon.service';

@Component({
  selector: 'paper-m-icon',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./paper-m-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PaperMIconComponent {
  private document: Document;
  private svgIcon: SVGElement;
  private iconName: string;

  @Input() size: 'small' | 'medium' | 'large' = 'large';

  @Input()
  set name(iconName: string) {
    this.iconName = iconName;
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.paperIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.renderer2.appendChild(this.element.nativeElement, this.svgIcon);
  }
  get name() {
    return this.iconName;
  }

  @HostBinding('class') pmIcon = 'pm-icon';
  @HostBinding('class.pm-icon-small') get isSmall() {
    return this.size === 'small';
  }
  @HostBinding('class.pm-icon-medium') get isMedium() {
    return this.size === 'medium';
  }
  @HostBinding('class.pm-icon-large') get isLarge() {
    return this.size === 'large';
  }

  constructor(
    private element: ElementRef,
    private paperIconRegistry: PaperMIconService,
    private renderer2: Renderer2,
    @Optional() @Inject(DOCUMENT) document: any,
  ) {
    // https://stackoverflow.com/questions/49513359/could-not-resolve-type-document-in-angular5
    this.document = document as Document;
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.renderer2.createElement('div');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
