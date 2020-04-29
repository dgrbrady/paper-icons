import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[pmDangerButton]',
})
export class PaperMDangerButtonDirective implements AfterViewInit {
  @HostListener('mousedown') onMouseDown() {
    this.elRef.nativeElement.style.backgroundColor = 'pink';
  }
  @HostListener('mouseup') onMouseUp() {
    this.elRef.nativeElement.style.backgroundColor = 'red';
  }

  constructor(private elRef: ElementRef<HTMLElement>) {}
  ngAfterViewInit() {
    this.elRef.nativeElement.style.backgroundColor = 'red';
    this.elRef.nativeElement.style.color = 'white';
  }
}
