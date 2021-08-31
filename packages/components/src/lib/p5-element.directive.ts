/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, Input, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { toSketch, createCanvas } from '@ngx-p5/core';

import { isFunction } from './isFunction.function';

@Directive({ selector: '[p5Element]'})
export class P5Element implements OnDestroy, OnInit{ // eslint-disable-line @angular-eslint/directive-class-suffix

  @Input()
  public set sketch(s: any){
    this._sketch = s;
  }

  private _sketch!: (p: any) => void;

  private instance: any;

  private element!: HTMLElement;

  constructor(_ref: ElementRef<HTMLElement>){
    this.element = _ref.nativeElement;
  }

  public ngOnInit(){
    if(this._sketch === undefined) return;

    this.attach(this._sketch);
  }

  public attach(sketch: any){
    this.removeInstance();

    sketch = isFunction(sketch) ?
      sketch : toSketch(this._sketch);

    return createCanvas(sketch, this.element)
  }

  public removeInstance(){
    if (!this.instance) return;

    this.instance.remove();
  }

  public ngOnDestroy(){
    this.removeInstance();
  }
}
