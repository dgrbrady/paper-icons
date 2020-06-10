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
  PmUiBadgeIcons,
  PmUiDialogComponent,
  PmUiIconComponent,
  PmUiItemIcons,
} from 'projects/pm-ui/src/public-api';

@Component({
  templateUrl: './icon-page.component.html',
  styleUrls: ['./icon-page.component.css'],
})
export class IconPageComponent implements OnInit {
  itemIcons = Object.values(PmUiItemIcons).map(icon => icon.name);
  badgeIcons = Object.values(PmUiBadgeIcons).map(icon => icon.name);

  @ViewChild('clipboardDialog', { static: true })
  clipboardDialog: PmUiDialogComponent;
  @ViewChild('message', { static: false }) message: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

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

  copyToClipBoard(icon: PmUiIconComponent) {
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
