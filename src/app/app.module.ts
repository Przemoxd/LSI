import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeModule } from './components/exchange/exchange.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExchangeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
