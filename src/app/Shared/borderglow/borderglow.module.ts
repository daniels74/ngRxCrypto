import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { glowDirective } from './borderglow.directive';



@NgModule({
  declarations: [
    glowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [glowDirective]
})
export class BorderglowModule { }
