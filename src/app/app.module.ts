import { NgModule, Component } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// import third-party modules
import { Ng2PageScrollModule } from 'ng2-page-scroll';

/** Components */

@Component({
  selector: 'my-app',
  template: ``
})
export class App { }


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2PageScrollModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
