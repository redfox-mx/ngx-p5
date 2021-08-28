
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EVENTS } from './events'

export type NormalizerFun = (n: any) => ((p: any) => void)

export function objectToSketch(value: any) {
  return function (P5: any) {
    for (const event of EVENTS){
      if (value[event])
        P5[event] = (...arg: any[]) => { value[event](P5, ...arg) }
    }
  }
}

/**
 * convert form class or object to sketch function by calling p5 event methods
 * @param O object to be converted
 * @param normalizer optional function to substract sketch function
 * @returns a sketch funtion to init a p5 instance
 */
export function toSketch (O: any, normalizer: NormalizerFun = objectToSketch) {
  return normalizer(O);
}
