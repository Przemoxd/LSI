import { NgModule } from '@angular/core';
import { ExchangeComponent } from './exchange.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TableComponent } from './table/table.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [
        ExchangeComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ToastModule,
        InputTextModule,
        InputMaskModule,
        CalendarModule,
        TableModule,
        HttpClientModule
    ],
    exports: [
        ExchangeComponent
    ],
})
export class ExchangeModule { }

