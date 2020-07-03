import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[pm-button], a[pm-button]',
  exportAs: 'pm-button',
  templateUrl: './pm-ui-button.component.html',
  styleUrls: ['./pm-ui-button.component.css'],
})
export class PmUiButtonComponent {
  constructor(private elRef: ElementRef<HTMLElement>) {}
  @HostBinding('style.backgroundColor') @Input() backgroundColor =
    'rgba(0, 0, 0, 0.05)';
  @HostBinding('style.color') @Input() textColor: string;
  @Input()
  activeColor = 'rgba(0, 0, 0, 0.25)';
  @Input() disabled: boolean;
  @HostListener('mouseenter') onMouseEnter() {
    this.elRef.nativeElement.style.boxShadow = `0 -4px 15px -6px black`;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.boxShadow =
      '3px 3px 1px 0px rgb(15, 15, 15)';
  }
  @HostListener('mousedown') onMouseDown() {
    this.elRef.nativeElement.style.backgroundColor = this.activeColor;
  }
  @HostListener('mouseup') onMouseUp() {
    this.elRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}
