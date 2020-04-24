import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import anime from 'animejs';
import {
  PaperBadges,
  PaperItems,
  PaperMDialogComponent,
  PaperMIconComponent,
} from '../../../ng-paper-m/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'paper-icons-showcase';
  itemIcons = Object.values(PaperItems).map(icon => icon.name);
  badgeIcons = Object.values(PaperBadges).map(icon => icon.name);

  @ViewChild('clipboardDialog', { static: true })
  clipboardDialog: PaperMDialogComponent;
  @ViewChild('message', { static: false }) message: ElementRef<HTMLDivElement>;

  constructor(
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit() {}

  wobble(event: MouseEvent) {
    const eventTarget = event.target as HTMLElement;
    let svg =
      eventTarget.tagName === 'svg'
        ? ((eventTarget as unknown) as SVGElement)
        : eventTarget.querySelector('svg');
    if (!svg) {
      // sometimes the event will be fired on the <path> element, so traverse the path to find the parent <svg>
      svg = event
        .composedPath()
        .find((target: HTMLElement) => target.tagName === 'svg') as SVGElement;
    }
    anime({
      targets: svg,
      rotate: [-10, 10, 0],
      loop: 2,
      easing: 'easeInOutSine',
      duration: 250,
    });
  }

  copyToClipBoard(icon: PaperMIconComponent) {
    const exampleCode = this.document.querySelector(`#${icon.name}_example`);
    this.document.defaultView.navigator.clipboard.writeText(
      exampleCode.textContent,
    );
    this.message.nativeElement.style.opacity = '100';
    this.clipboardDialog.restart();
    setTimeout(() => {
      this.message.nativeElement.style.opacity = '0';
    }, 2000);
  }
}
