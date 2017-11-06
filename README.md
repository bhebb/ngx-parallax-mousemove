# ngx-parallax-mousemove

A simple angular module for creating a parallax effect connected to the mousemove event.

The module provides some angular directives wrapper arround parallax-js. 

## Installation

If you're using npm :

`npm i -s ngx-parallax-mousemove`

It is also possible to install locally:

`npm install --save-dev ngx-parallax-mousemove`

## Usage

- Add ParallaxMousemoveModule in your app.

There are 2 main directives to use :
- ParallaxWrapper and parallaxLayer.
 
 ```html
 <ul parallaxWrapper id="scene" [parallaxOptions]="{scalarX:40, scalarY:20,  frictionX:0.1,  frictionY:0.1, originX:0.4, originY:0.4}">
      <li parallaxLayer [depth]="0.90" style="position: absolute;min-width: 100%;">
        <img src="/assets/img/cloud.png" style="width: 960px;height: 300px">
      </li>
      <li parallaxLayer [depth]="0.50" style="min-width: 100%;height: auto;">
        <img src="/assets/img/mountain.png" style="position: absolute;width: 100%;height: auto">
      </li>
    </ul>
  ```
  
 - The id attribute in parallaxWrapper element is mandatory for parallax component.
 - parallaxOptions is a set of parallax properties that can be apply on layers. See [parallax-js](https://github.com/wagerfield/parallax) for more details.
 - parallaxLayer: Each layer needs a depth attribute corresponding to data-depth in parallax-js. The movement applied to each layer will be multiplied by its depth attribute.  
  

## Licence
MIT http://rem.mit-license.org
