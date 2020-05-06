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
  templateUrl: './paper-m-button.component.html',
  styleUrls: ['./paper-m-button.component.css'],
})
export class PaperMButtonComponent {
  constructor(private elRef: ElementRef<HTMLElement>) {}
  @HostBinding('style.backgroundColor') @Input() backgroundColor =
    'rgba(0, 0, 0, 0.05)';
  @HostBinding('style.color') @Input() textColor: string;
  @Input()
  activeColor = 'rgba(0, 0, 0, 0.25)';
  @Input() disabled: boolean;
  @HostListener('mousedown') onMouseDown() {
    this.elRef.nativeElement.style.backgroundColor = this.activeColor;
  }
  @HostListener('mouseup') onMouseUp() {
    this.elRef.nativeElement.style.backgroundColor = 'initial';
  }
}
