import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'pm-select',
  templateUrl: './pm-ui-select.component.html',
  styleUrls: ['./pm-ui-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PmUiSelectComponent implements OnInit {
  @Input() label: string;
  @Input() value: any;
  @Input() options: any[];
  @ViewChild('optionsContainer', { static: true }) optionsContainer: ElementRef<
    HTMLElement
  >;
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef<HTMLElement>;
  showOptions = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.document.defaultView.addEventListener('click', event => {
      const target: HTMLElement = event.target as HTMLElement;
      const input: HTMLInputElement = this.wrapper.nativeElement.querySelector(
        'input',
      );
      if (target.id !== input.id) {
        this.showOptions = false;
        this.cdRef.markForCheck();
      }
    });
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
    const wrapperWidth = this.document.defaultView.getComputedStyle(
      this.wrapper.nativeElement,
    ).width;
    this.renderer2.setStyle(
      this.optionsContainer.nativeElement,
      'width',
      wrapperWidth,
    );
  }

  setValue(newValue: any) {
    this.value = newValue;
  }
}
