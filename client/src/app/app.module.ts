import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { AppComponent } from './app.component';
import { ShiftsComponent } from './shifts/shifts.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiftsComponent
  ],
  imports: [
    BrowserModule , HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
