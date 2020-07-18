import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pm-dialog',
  templateUrl: './pm-ui-dialog.component.html',
  styleUrls: ['./pm-ui-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'dialog',
})
export class PmUiDialogComponent implements AfterViewInit {
  @ViewChild('dialogContent', { static: true }) dialogContent: ElementRef<
    HTMLSpanElement
  >;
  characters: string[] = [];
  private textSpeed = 30;
  private timeouts: number[] = [];
  toneClassName = 'pm-dialog-tone-neutral';
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
    this.toneClassName = `pm-dialog-tone-${tone}`;
    this.toneState = tone;
  }

  get tone() {
    return this.toneState;
  }

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit() {
    this.wrapCharacters(this.dialogContent.nativeElement.textContent);
  }

  @HostListener('click')
  onClick() {
    this.finishAnimation();
  }

  finishAnimation() {
    this.dialogContent.nativeElement
      .querySelectorAll('span')
      .forEach(span =>
        this.renderer2.setStyle(span, 'display', 'inline-block'),
      );
  }

  wrapCharacters(text: string) {
    this.dialogContent.nativeElement.textContent = '';
    // characters get added to this queue until a space is found,
    // then all the characters in the queue are added to the DOM
    let charQueue: HTMLSpanElement[] = [];
    [...text].forEach((char, index, array) => {
      // span containing a single character
      const charSpan: HTMLSpanElement = this.renderer2.createElement('span');
      this.renderer2.addClass(charSpan, 'pm-dialog-char');
      charSpan.innerText = char;
      this.renderer2.setStyle(charSpan, 'display', 'none');
      if (this.tone === 'scared') {
        this.setScaredStyles(charSpan);
      }
      const charTimeout = setTimeout(
        () => this.renderer2.setStyle(charSpan, 'display', 'inline-block'),
        index * this.textSpeed,
      );
      this.timeouts.push(charTimeout);
      // if the current character is a space, we know the word has ended
      // and we need to append the word to the DOM and flush the queue
      if (char === ' ' && index !== 0) {
        charSpan.innerHTML = '&nbsp;';
        const wordSpan: HTMLSpanElement = this.renderer2.createElement('span');
        const wordTimeout = setTimeout(
          () => this.renderer2.setStyle(wordSpan, 'display', 'inline-block'),
          index * this.textSpeed,
        );
        this.timeouts.push(wordTimeout);

        this.renderer2.addClass(wordSpan, 'pm-dialog-word');
        charQueue.forEach((span, i, queue) =>
          this.renderer2.appendChild(wordSpan, span),
        );
        charQueue = [];
        // add the span that contains the space character to the word
        this.renderer2.appendChild(wordSpan, charSpan);
        // add the span that wraps the entire word to the DOM
        this.renderer2.appendChild(this.dialogContent.nativeElement, wordSpan);
      } else {
        // if the current character is not a space, we add it to the queue
        charQueue.push(charSpan);
      }
    });
  }

  setScaredStyles(span) {
    function setStyleProperties() {
      const randomXSeed = Math.random() < 0.5 ? -1 : 1;
      const randomYSeed = Math.random() < 0.5 ? -1 : 1;
      const randomX = randomXSeed * Math.random() * 4;
      const randomY = randomYSeed * Math.random() * 4;
      span.style.setProperty('--pm-dialog-scared-x', randomX + 'px');
      span.style.setProperty('--pm-dialog-scared-y', randomY + 'px');
    }
    setInterval(setStyleProperties, 0);
  }

  restart() {
    if (this.timeouts.length) {
      this.timeouts.forEach(timeout => clearTimeout(timeout));
      this.timeouts = [];
    }
    this.dialogContent.nativeElement
      .querySelectorAll('span.pm-dialog-char')
      .forEach((span, index) => {
        this.renderer2.setStyle(span, 'display', 'none');
        if (this.tone === 'scared') {
          this.setScaredStyles(span);
        }
        const timeout = setTimeout(
          () => this.renderer2.setStyle(span, 'display', 'inline-block'),
          index * this.textSpeed,
        );
        this.timeouts.push(timeout);
      });
  }
}
