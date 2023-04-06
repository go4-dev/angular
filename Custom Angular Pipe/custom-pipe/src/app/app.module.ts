import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommaNumberPipe } from './shared/pipes/comma-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommaNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
