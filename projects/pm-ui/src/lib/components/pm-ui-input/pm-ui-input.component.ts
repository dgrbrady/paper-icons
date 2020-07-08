import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[pm-input]',
  templateUrl: './pm-ui-input.component.html',
  styleUrls: ['./pm-ui-input.component.css'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[required]': 'required',
    '[disabled]': 'disabled',
    '[name]': 'name',
    '[type]': 'type',
  },
})
export class PmUiInputComponent implements OnInit {
  required: boolean;
  disabled: boolean;
  name: string;
  private _type: string;
  get type() {
    return this._type;
  }
  set type(type: string) {
    console.log(type);
    this._type = type;
  }
  constructor() {}

  ngOnInit() {}
}
