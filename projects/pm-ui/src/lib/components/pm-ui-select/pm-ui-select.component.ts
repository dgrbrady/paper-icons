import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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
  showOptions = false;
  constructor() {}

  ngOnInit() {}
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
  setValue(newValue: any) {
    this.value = newValue;
  }
}
