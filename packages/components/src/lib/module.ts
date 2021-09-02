import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P5Element } from "./p5-element.directive";
@NgModule({
  imports: [CommonModule],
  declarations: [ P5Element ],
  exports: [ P5Element ]
})
export class NgxP5Module {}
