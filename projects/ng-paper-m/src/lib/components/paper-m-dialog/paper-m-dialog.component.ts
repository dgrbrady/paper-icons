import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'paper-m-dialog',
  templateUrl: './paper-m-dialog.component.html',
  styleUrls: ['./paper-m-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PaperMDialogComponent implements AfterViewInit {
  @ViewChild('dialogContent', { static: true }) dialogContent: ElementRef<
    HTMLSpanElement
  >;
  characters: string[] = [];
  private textSpeed = 30;
  toneClassName = 'paper-m-dialog-tone-neutral';
  private toneState: string;
  @Input() set speed(speed: 'slow' | 'normal' | 'fast' | number) {
    this.textSpeed =
      speed === 'slow'
        ? 50
        : speed === 'normal'
        ? 30
        : speed === 'fast'
        ? 10
        : typeof speed === 'number'
        ? speed
        : 30;
  }

  @Input() set tone(tone: string) {
    this.toneClassName = `paper-m-dialog-tone-${tone}`;
    this.toneState = tone;
    this.cdRef.detectChanges();
  }

  get tone() {
    return this.toneState;
  }

  constructor(private renderer2: Renderer2, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.wrapCharacters(this.dialogContent.nativeElement.textContent);
  }

  @HostListener('click')
  onClick() {
    this.dialogContent.nativeElement
      .querySelectorAll('span')
      .forEach(span =>
        this.renderer2.setStyle(span, 'display', 'inline-block'),
      );
  }

  wrapCharacters(text: string) {
    this.dialogContent.nativeElement.textContent = '';
    [...text].forEach((char, index, array) => {
      const span: HTMLSpanElement = this.renderer2.createElement('span');
      this.renderer2.addClass(span, 'paper-m-dialog-char');
      const textNode = this.renderer2.createText(
        char === ' ' ? '\u0020' : char,
      );
      this.renderer2.appendChild(span, textNode);
      this.renderer2.setStyle(span, 'display', 'none');
      if (char === ' ') {
        this.renderer2.setStyle(span, 'margin-right', '10px');
      }
      if (this.tone === 'scared') {
        this.setScaredStyles(span);
      }
      this.renderer2.appendChild(this.dialogContent.nativeElement, span);
      setTimeout(
        () => this.renderer2.setStyle(span, 'display', 'inline-block'),
        index * this.textSpeed,
      );
    });
  }

  setScaredStyles(span) {
    function setStyleProperties() {
      const randomXSeed = Math.random() < 0.5 ? -1 : 1;
      const randomYSeed = Math.random() < 0.5 ? -1 : 1;
      const randomX = randomXSeed * Math.random() * 4;
      const randomY = randomYSeed * Math.random() * 4;
      span.style.setProperty('--paper-m-dialog-scared-x', randomX + 'px');
      span.style.setProperty('--paper-m-dialog-scared-y', randomY + 'px');
    }
    setInterval(setStyleProperties, 0);
  }

  restart() {
    this.dialogContent.nativeElement
      .querySelectorAll('span')
      .forEach((span, index) => {
        this.renderer2.setStyle(span, 'display', 'none');
        if (this.tone === 'scared') {
          this.setScaredStyles(span);
        }
        setTimeout(
          () => this.renderer2.setStyle(span, 'display', 'inline-block'),
          index * this.textSpeed,
        );
      });
  }
}
