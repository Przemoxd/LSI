import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exchangeRatesTable } from '../../models/exchangeRatesTable';

const EXCHANGE_RATE_URL = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
const EXCHANGE_RATE_FOR_DATE_URL = `http://api.nbp.pl/api/exchangerates/tables/A/{date}/?format=json`;

@Injectable({
  providedIn: 'root'
})
export class ExchangeFinderService {

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<Array<exchangeRatesTable>> {
    return this.http.get<Array<exchangeRatesTable>>(EXCHANGE_RATE_URL);
  }

  getExchangeForDate(date: string): Observable<Array<exchangeRatesTable>> {
    return this.http.get<Array<exchangeRatesTable>>(EXCHANGE_RATE_FOR_DATE_URL.replace('{date}', date));
  }
}
