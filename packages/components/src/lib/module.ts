import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxP5Component } from './ngx-p5.component';
import { P5Element } from "./p5-element.directive";
@NgModule({
  imports: [CommonModule],
  declarations: [NgxP5Component, P5Element],
  exports: [ NgxP5Component, P5Element ]
})
export class NgxP5Module {}
