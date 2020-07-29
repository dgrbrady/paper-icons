import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[pmLazySusanItem]',
})
export class PmUiLazySusanItemDirective {
  @Output() switch = new EventEmitter<PmUiLazySusanItemDirective>(true);
  @HostBinding('class.lazy-susan-item') className = true;
  @HostListener('click') onClick() {
    this.switch.emit(this);
  }
  constructor(public element: ElementRef<HTMLElement>) {}
}
