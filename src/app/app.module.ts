import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ParallaxMousemoveModule} from './parallax-mousemove/parallax-mousemove.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ParallaxMousemoveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
