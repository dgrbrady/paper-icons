import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[pmIconButton]',
})
export class PmUiIconButtonDirective implements AfterViewInit {
  constructor(private elRef: ElementRef<HTMLElement>) {}
  ngAfterViewInit() {
    this.elRef.nativeElement.classList.add('pm-icon-btn');
    this.elRef.nativeElement.style.setProperty(
      'background-color',
      'transparent',
      'important',
    );
    this.elRef.nativeElement.style.boxShadow = 'none';
    this.elRef.nativeElement.style.borderRadius = '25%';
    this.elRef.nativeElement.style.padding = '1px';
  }
  @HostListener('mouseup') onMouseUp() {
    this.elRef.nativeElement.style.setProperty(
      'background-color',
      'transparent',
      'important',
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.setProperty(
      'box-shadow',
      'none',
      'important',
    );
  }
}
