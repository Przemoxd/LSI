import { Component, OnInit } from '@angular/core';
import { exchangeRatesTable } from 'src/app/models/exchangeRatesTable';
import { ExchangeFinderService } from './exchange-finder.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  exchangeRates!: Array<exchangeRatesTable>;

  constructor(private exchangeRateService: ExchangeFinderService) { }

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.exchangeRateService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data;
    })
  }

}
