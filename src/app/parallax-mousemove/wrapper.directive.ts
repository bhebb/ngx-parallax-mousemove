import {DOCUMENT} from '@angular/common';
import {AfterViewInit, Directive, Inject, Input, OnDestroy, OnInit} from '@angular/core';

import Parallax from 'parallax-js';
import {ParallaxProperties} from './model/parallaxProperties';

@Directive({
  selector: '[parallaxWrapper]'
})
export class WrapperDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input() id: string;

  @Input()
  parallaxOptions: ParallaxProperties;

  private parallaxInstance: Parallax;

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    if (!this.id) {
      throw new Error('id is required');
    }
  }

  ngAfterViewInit(): void {
    console.log('this.id-------------------------' + this.id);
    const container = this.document.getElementById(this.id);
    this.parallaxInstance = new Parallax(container, this.parallaxOptions);
  }

  ngOnDestroy(): void {
    this.parallaxInstance.disable();
  }

  /*
  set parallaxOptions(parallaxOptions: ParallaxProperties) {
    this._parallaxOptions = parallaxOptions;
    const keys = Object.keys(parallaxOptions);
    for (const key in keys) {
      if (keys[key]) {
        this._parallaxOptions = Object.assign(this[key] !== undefined ? {[key]: this[key]} : {});
      }
    }
   this._parallaxOptions = Object.keys(parallaxOptions).reduce((acc, key) =>
         Object.assign(acc, this[key] !== undefined ? {[key]: this[key]} : {}),
       {});
  }

  get parallaxOptions(): ParallaxProperties {
    return this._parallaxOptions;
  }*/
}
