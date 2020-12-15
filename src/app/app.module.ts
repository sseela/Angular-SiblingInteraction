import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import {FormsModule} from '@angular/forms';
import { AnotherComponent } from './another/another.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
