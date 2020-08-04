import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
// import anime from 'animejs';
// import * as Three from 'three';
import { PmUiLazySusanItemDirective } from './directives/pm-ui-lazy-susan-item.directive';

@Component({
  selector: 'pm-lazy-susan',
  templateUrl: './pm-ui-lazy-susan.component.html',
  styleUrls: ['./pm-ui-lazy-susan.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PmUiLazySusanComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @ViewChild('container', { static: true }) container: ElementRef<HTMLElement>;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @ContentChildren(PmUiLazySusanItemDirective) content: QueryList<
    PmUiLazySusanItemDirective
  >;

  /* Commented out to fix library build issues
   scene: Three.Scene;
  camera: Three.PerspectiveCamera;
  renderer: Three.WebGL1Renderer;
 */ animationId: number;

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: radix
    const computedWidth = Number.parseInt(
      window.getComputedStyle(this.container.nativeElement).width,
    );
    // this.canvas.nativeElement.width = computedWidth;
  }
  ngAfterViewInit() {
    const frontItems = this.content
      .map((item, index, items) => {
        if (index <= Math.floor(items.length / 2)) {
          return item;
        }
      })
      .filter(item => !!item)
      .map(item => item.element.nativeElement);
    /* Commented out to fix library build issues
    anime({
      targets: frontItems,
      scale: 1.25,
      duration: 1,
    });
    */
  }
  // drawEllipse(ctx, cx, cy, rx, ry) {
  //   ctx.beginPath();
  //   ctx.moveTo(cx + rx, cy);
  //   for (let a = 0, step = 0.02, max = Math.PI * 2; a < max; a += step) {
  //     ctx.lineTo(cx + rx * Math.cos(a), cy + ry * Math.sin(a));
  //   }
  // }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    /* Commented out to fix library build issues
    this.scene.dispose();
    this.renderer.dispose();
    document.body.removeChild(this.renderer.domElement);
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    */
  }

  private three() {
    // Three.js
    /* Commented out to fix library build issues
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(
      50,
      this.container.nativeElement.clientWidth /
        this.container.nativeElement.clientHeight,
      0.1,
      1000,
    );
    this.renderer = new Three.WebGL1Renderer({ alpha: true });
    // const renderer = new CSS3DRenderer();
    this.renderer.setSize(
      this.container.nativeElement.clientWidth,
      this.container.nativeElement.clientHeight,
    );
    document.body.appendChild(this.renderer.domElement);
    const geometry = new Three.CylinderGeometry(0.5, 6, 2, this.content.length);
    // const geometry = new Three.CylinderBufferGeometry(
    //   1,
    //   4,
    //   0.1,
    //   this.content.length,
    // );
    const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    const cylinder = new Three.Mesh(geometry, material);
    cylinder.material.wireframe = true;

    this.scene.add(cylinder);
    this.camera.position.z = 11;
    // camera.position.z = 450;
    cylinder.rotation.x += 0.1;
    const edgeVertices = geometry.vertices.filter(
      vertex => vertex.y === -1 && vertex.z !== 0,
    );
    const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
    const itemPoints: [any, any] = zip(edgeVertices, this.content.toArray());
    itemPoints.forEach(([point, item]) => {
      // item.element.nativeElement.style.backgroundColor = 'red';
      // const obj = new CSS3DObject(
      //   (item as PmUiLazySusanItemDirective).element.nativeElement,
      // );
      // obj.position.add(point);
      // cylinder.add(obj);

      const sg = new Three.SphereGeometry(0.5);
      const sm = new Three.MeshBasicMaterial({ color: 0xff0000 });
      const sphere = new Three.Mesh(sg, sm);
      sphere.position.add(point);
      cylinder.add(sphere);
    });
    // edgeVertices.forEach(vertex => {
    //   const sg = new Three.SphereGeometry(0.5);
    //   const sm = new Three.MeshBasicMaterial({ color: 0xff0000 });
    //   const sphere = new Three.Mesh(sg, sm);
    //   sphere.position.add(vertex);
    //   cylinder.add(sphere);
    // });

    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      cylinder.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };
    animate();
    */
  }
  getEllipsePoints(cx, cy, rx, ry, count) {
    const points = [];
    let a = 0;
    const max = Math.PI * 2;
    const step = max / count;

    for (; a < max; a += step) {
      points.push(cx + rx * Math.cos(a), cy + ry * Math.sin(a));
    }

    return points;
  }

  ngAfterContentInit() {
    this.drawPoints();
    this.three();
    console.log(this.content);
    // this.content.forEach(item =>
    //   item.switch.subscribe(activatedItem => this.rotateItems(activatedItem)),
    // );
  }

  createForeignObject(element: ElementRef<HTMLElement>) {
    console.log(element.nativeElement.innerHTML);
    const data = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        ${element.nativeElement}
      </div>
      </foreignObject>
      </svg>`;
    const img = new Image();
    const svg = new Blob([data], {
      type: 'image/svg+xml;charset=utf-8',
    });
    return { image: img, url: URL.createObjectURL(svg) };
  }

  drawPoints() {
    const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
    // const ctx = this.canvas.nativeElement.getContext('2d');
    const points = this.getEllipsePoints(
      200,
      100,
      200,
      80,
      this.content.length,
    );
    const pairs = [];
    let pair = { x: undefined, y: undefined };
    points.forEach((point, index) => {
      if (index % 2 !== 0) {
        pair.x = point;
        pairs.push(pair);
        pair = { x: undefined, y: undefined };
      } else {
        pair.y = point;
      }
    });

    const itemLocation = zip(this.content.toArray(), pairs);

    itemLocation.forEach(([item, coord]) => {
      // const { image, url } = this.createForeignObject(item.element);
      // ctx.drawImage(image, 0, 0);
      // URL.revokeObjectURL(url);
      item.element.nativeElement.style.setProperty('top', `${coord.x}px`);
      item.element.nativeElement.style.setProperty('left', `${coord.y}px`);
    });
  }

  rotateItems(activatedItem: PmUiLazySusanItemDirective) {
    console.log(activatedItem);
  }
}
