import { AfterViewInit, Directive, ElementRef } from '@angular/core';

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
}
