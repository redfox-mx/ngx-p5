import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'ngx-p5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div p5Element [sketch]="sketch" class="ngx-p5-component"><div>`,
})
export class NgxP5Component {
  @Input()
  public sketch: any;
}
