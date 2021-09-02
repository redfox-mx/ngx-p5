import p5 from 'p5'
import { isString } from './isString.function';

/**
 * @description
 * builder function for p5 instance, this function returns a new object
 * whit reference to p5 instance and parent element for canvas. It could
 * be util if you need remove sketch outside your function
 *
 * @param sketch custom sketch to be rendered
 * @param container selector or html element to attach p5 cnavas
 * @returns object with p5 instance reference and the parent element
 * @usageNotes
 * create your sketch and then you can pass selector or html element
 * to create p5 canvas
 *
 * ```typescript
 * const sketch = (p) => {
 * // your awsome sketch
 * }
 *
 * createCanvas(sketch, '#awsome-sketch')
 * ```
 */
export function createCanvas(sketch: (p: any) => void, container?: HTMLElement | string){
  let element;
  if ( isString(container) ) {
    const target = document.querySelector<HTMLElement>(container);
    element = target ? target : undefined;
  } else {
    element = container;
  }

  const instance = new p5(sketch, element);
  return {
    __proto__: { constructor: createCanvas},
    get instance() { return instance },
    element
  }
}
