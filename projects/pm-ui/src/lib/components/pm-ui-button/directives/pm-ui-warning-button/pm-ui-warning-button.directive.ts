import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[pmWarningButton]',
})
export class PmUiWarningButtonDirective implements AfterViewInit {
  @HostListener('mousedown') onMouseDown() {
    this.elRef.nativeElement.style.backgroundColor = '#ffec66';
  }
  @HostListener('mouseup') onMouseUp() {
    this.elRef.nativeElement.style.backgroundColor = '#ffc726';
  }

  constructor(private elRef: ElementRef<HTMLElement>) {}
  ngAfterViewInit() {
    this.elRef.nativeElement.style.backgroundColor = '#ffc726';
    this.elRef.nativeElement.style.color = 'white';
  }
}
