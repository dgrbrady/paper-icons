import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { PmUiTableComponent } from '../pm-ui-table.component';

@Component({
  selector: 'pm-paginator',
  templateUrl: './pm-ui-paginator.component.html',
  styleUrls: ['./pm-ui-paginator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PmUiPaginatorComponent implements OnInit, AfterContentInit {
  @Input() table: PmUiTableComponent;
  @Input() pageSizes: number[] = [5, 10, 15];
  currentPage = 1;
  pageSize = this.pageSizes[0];
  startingIndex: number;
  endingIndex: number;
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.changePage();
  }

  changePage() {
    this.startingIndex =
      this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.pageSize;
    this.endingIndex = this.currentPage * this.pageSize - 1;
    this.table.changePage(this.startingIndex, this.endingIndex);
  }

  pageUp() {
    const pageNumber =
      this.currentPage === Math.ceil(this.table.rows.length / this.pageSize)
        ? this.currentPage
        : this.currentPage + 1;
    this.currentPage = pageNumber;
    this.changePage();
  }

  pageDown() {
    const pageNumber = this.currentPage === 1 ? 1 : this.currentPage - 1;
    this.currentPage = pageNumber;
    this.changePage();
  }
}
