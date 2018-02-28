import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighLightDirective } from './high-light.directive';
import { Ato4Pipe } from './ato4.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    Ato4Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
