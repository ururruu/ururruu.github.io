import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// import third-party modules
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';



@NgModule({
  imports:      [ BrowserModule,  Ng2PageScrollModule ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
