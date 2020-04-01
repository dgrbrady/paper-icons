import { Component } from '@angular/core';
import { PaperBadges, PaperItems } from 'projects/paper-icons/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paper-icons-showcase';
  itemIcons = Object.values(PaperItems).map(icon => icon.name);
  badgeIcons = Object.values(PaperBadges).map(icon => icon.name);
}
