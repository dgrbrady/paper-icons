import { Component, ElementRef, OnInit } from '@angular/core';
import anime from 'animejs';
import { PaperBadges, PaperItems } from 'paper-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'paper-icons-showcase';
  itemIcons = Object.values(PaperItems).map(icon => icon.name);
  badgeIcons = Object.values(PaperBadges).map(icon => icon.name);

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    const textElement: HTMLElement = this.elRef.nativeElement.querySelector(
      '.dialogue-text',
    );
    // wrap each letter in a span so we can animate it
    textElement.innerHTML = textElement.textContent.replace(
      /\S/g,
      '<span class="letter">$&</span>',
    );
    const letters = textElement.querySelectorAll('.letter');
    const timelineDuration = letters.length * 1.25;
    const timeline = anime.timeline({ duration: timelineDuration });
    letters.forEach(letter =>
      timeline.add({
        targets: letter,
        opacity: [0, 1],
      }),
    );
  }

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
}
