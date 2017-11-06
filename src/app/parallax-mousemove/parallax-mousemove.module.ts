import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LayerDirective} from './layer.directive';
import {WrapperDirective} from './wrapper.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WrapperDirective, LayerDirective],
  exports: [WrapperDirective, LayerDirective]
})
export class ParallaxMousemoveModule {
}
