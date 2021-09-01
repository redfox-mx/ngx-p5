/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';


@Component({
  selector: 'ngx-p5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="ngx-p5-component" #element><div>`,
})
export class NgxP5Component {

  @Output()
  public preload: EventEmitter<any> = new EventEmitter();

  @Output()
  public setup: EventEmitter<any> = new EventEmitter();

  @Output()
  public draw: EventEmitter<any> = new EventEmitter();
}
