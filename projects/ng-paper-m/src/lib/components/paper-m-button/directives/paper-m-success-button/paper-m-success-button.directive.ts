import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[pmSuccessButton]',
})
export class PaperMSuccessButtonDirective implements AfterViewInit {
  @HostListener('mousedown') onMouseDown() {
    this.elRef.nativeElement.style.backgroundColor = 'lightgreen';
  }
  @HostListener('mouseup') onMouseUp() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }

  constructor(private elRef: ElementRef<HTMLElement>) {}
  ngAfterViewInit() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
    this.elRef.nativeElement.style.color = 'white';
  }
}
