/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, Input, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { toSketch, createCanvas } from '@ngx-p5/core';

import { isFunction } from './isFunction.function';

/**
 * @description
 * Enable an easy way to attach p5 sektch to any HTMLElement
 */
@Directive({ selector: '[p5Element]'})
export class P5Element implements OnDestroy, OnInit{ // eslint-disable-line @angular-eslint/directive-class-suffix

  /**
   * @description
   * Input property. Refers to and p5 sketch to be rendered
   */
  @Input()
  public set sketch(s: any){
    this._sketch = s;
  }

  /** private sketch instance */
  private _sketch!: (p: any) => void;

  /**
   * reference to sketch and element within p5 instance, usefull to
   * remove p5 sketches and debug parent element
   */
  private instance: any;

  /** internal DOM HTMLElement to attachp5 instance */
  private element!: HTMLElement;

  constructor(_ref: ElementRef<HTMLElement>){
    this.element = _ref.nativeElement;
  }

  public ngOnInit(){
    if(this._sketch === undefined) return;

    this.attach(this._sketch);
  }

  /**
   * @description
   * method to attach custom sketch to current element
   * @param sketch custom sketch
   * @returns object with element and instance of p5 for current sketch
   */
  public attach(sketch: any){
    this.removeInstance();

    sketch = isFunction(sketch) ?
      sketch : toSketch(this._sketch);

    return createCanvas(sketch, this.element)
  }

  /**
   * @description
   * remove p5 instance
   */
  public removeInstance(){
    if (!this.instance) return;

    this.instance.remove();
  }

  public ngOnDestroy(){
    this.removeInstance();
  }
}
