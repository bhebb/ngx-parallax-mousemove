import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[parallaxLayer]'
})
export class LayerDirective implements OnInit {

  @Input() @HostBinding('attr.data-depth')
  depth: string;

  constructor(element: ElementRef) {
  }

  ngOnInit(): void {
    // depth is required in parallax.js
    if (!this.depth) {
      throw new Error('depth is required');
    }
  }

}
