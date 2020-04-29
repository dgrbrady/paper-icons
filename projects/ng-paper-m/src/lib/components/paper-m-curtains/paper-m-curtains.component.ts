import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-curtains',
  templateUrl: './paper-m-curtains.component.html',
  styleUrls: ['./paper-m-curtains.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaperMCurtainsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
