import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isAtHome: boolean;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngAfterViewInit() {
    this.document.defaultView.addEventListener('scroll', () => {
      const scrollUpButton = this.document.querySelector<HTMLButtonElement>(
        '.scroll-up-btn',
      );
      // if user scrolled more than 250px
      if (
        this.document.body.scrollTop > 250 ||
        this.document.documentElement.scrollTop > 250
      ) {
        scrollUpButton.style.display = 'block';
      } else {
        scrollUpButton.style.display = 'none';
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAtHome = event.url === '/';
      }
    });
  }

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
