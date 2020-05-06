import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pm-curtain-tab',
  template: `
    <ng-content></ng-content>
  `,
})
export class PaperMCurtainTabComponent {
  private isActive: boolean;
  get active() {
    return this.isActive;
  }
  set active(isActive: boolean) {
    this.isActive = isActive;
    if (isActive) {
      this.elRef.nativeElement.classList.add('active');
    } else {
      this.elRef.nativeElement.classList.remove('active');
    }
  }
  @Input() label: string;
  constructor(private elRef: ElementRef<HTMLElement>) {}
}

@Component({
  selector: 'pm-curtains',
  templateUrl: './paper-m-curtains.component.html',
  styleUrls: ['./paper-m-curtains.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PaperMCurtainsComponent implements AfterViewInit {
  @Input() color1 = 'maroon';
  @Input() color2 = 'red';
  @Input() trimColor = 'gold';
  @Input() tabTextColor = 'white';
  private readonly COLOR_1 = '--curtain-color-1';
  private readonly COLOR_2 = '--curtain-color-2';
  private readonly TRIM_COLOR = '--curtain-trim-color';
  private readonly TAB_TEXT_COLOR = '--curtain-tab-text-color';
  @ViewChild('curtainBody', { static: true })
  curtainBody: ElementRef<HTMLElement>;
  @ViewChild('curtains', { static: true })
  curtain: ElementRef<HTMLElement>;
  @ViewChild('tabContainer', { static: true })
  tabContainer: ElementRef<HTMLElement>;
  @ContentChildren(PaperMCurtainTabComponent, { descendants: true })
  tabs: QueryList<PaperMCurtainTabComponent>;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    this.elRef.nativeElement.style.setProperty(this.COLOR_1, this.color1);
    this.elRef.nativeElement.style.setProperty(this.COLOR_2, this.color2);
    this.elRef.nativeElement.style.setProperty(this.TRIM_COLOR, this.trimColor);
    this.elRef.nativeElement.style.setProperty(
      this.TAB_TEXT_COLOR,
      this.tabTextColor,
    );
    if (this.tabs.length) {
      this.tabs.first.active = true;
      this.cdRef.detectChanges();
    }
  }

  setActiveTab(tabIndex: number) {
    this.tabs.forEach((tab, index) => {
      tab.active = index === tabIndex;
    });
    const height = this.curtain.nativeElement.clientHeight;
    this.curtain.nativeElement.style.backgroundColor = this.color1;
    this.curtainBody.nativeElement.style.display = 'flex';
    this.curtainBody.nativeElement.style.height = height - 100 + 'px';
    this.tabContainer.nativeElement.style.display = 'none';
    setTimeout(() => {
      this.curtain.nativeElement.style.backgroundColor = 'initial';
      this.curtainBody.nativeElement.style.display = 'none';
      this.tabContainer.nativeElement.style.display = 'initial';
    }, 1000);
  }
}
