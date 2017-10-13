import { NgModule, Component } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// import third-party modules
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2PageScrollModule,
    AnimateOnScrollModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }