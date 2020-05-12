import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'table[pm-table]',
  templateUrl: './paper-m-table.component.html',
  styleUrls: ['./paper-m-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'pm-table',
})
export class PaperMTableComponent implements OnInit {
  @HostBinding('class.pm-table') bindClass = true;
  @Input() columns: TableColumn[];
  @Input() rows: any[];
  @Input() footer: { [key: string]: any[] };
  displayedRows: any[];

  constructor(private cdRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.displayedRows = this.rows;
  }

  changePage(startingIndex: number, endingIndex: number) {
    this.displayedRows = this.rows.slice(startingIndex, endingIndex);
    this.cdRef.markForCheck();
  }
}

export interface TableColumn {
  key: string;
  label: string;
}
