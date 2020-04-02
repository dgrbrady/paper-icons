import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { PaperIconsRegistry } from './paper-icons.registry.service';

@Component({
  selector: 'paper-icon',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./paper-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaperIconComponent implements OnInit, OnDestroy {
  private document: Document;
  private svgIcon: SVGElement;
  private observer: MutationObserver;
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

  constructor(
    private element: ElementRef,
    private paperIconRegistry: PaperIconsRegistry,
    private renderer2: Renderer2,
    @Optional() @Inject(DOCUMENT) document: any,
  ) {
    // https://stackoverflow.com/questions/49513359/could-not-resolve-type-document-in-angular5
    this.document = document as Document;
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  ngOnInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'ng-reflect-size') {
          const svg = mutation.target.parentElement.querySelector('svg');
          const className =
            this.size === 'small'
              ? 'small'
              : this.size === 'medium'
              ? 'medium'
              : 'large';
          this.renderer2.addClass(svg, className);
        }
      });
    });
    this.observer.observe(this.element.nativeElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });
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
