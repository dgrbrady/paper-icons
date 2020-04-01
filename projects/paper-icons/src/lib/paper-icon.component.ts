import { DOCUMENT } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
  Renderer2
} from "@angular/core";
import { PaperIconsRegistry } from "./paper-icons.registry.service";

@Component({
  selector: "paper-icon",
  template: `
    <ng-content></ng-content>
  `,
  styles: [":host::ng-deep svg{width: 40px; height: 40px}"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaperIconComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.paperIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.renderer2.appendChild(this.element.nativeElement, this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private paperIconRegistry: PaperIconsRegistry,
    private renderer2: Renderer2,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.renderer2.createElement("div");
    div.innerHTML = svgContent;
    return (
      div.querySelector("svg") ||
      this.document.createElementNS("http://www.w3.org/2000/svg", "path")
    );
  }
}
