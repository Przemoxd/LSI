import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { debounceTime, distinctUntilChanged, of, pipe } from 'rxjs';
import { exchangeRatesTable } from 'src/app/models/exchangeRatesTable';
import { ExchangeFinderService } from '../exchange-finder.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [MessageService]
})
export class TableComponent implements OnInit {

  @Input()
  data!: Array<exchangeRatesTable>;

  date!: any;
  msgs: Array<any> = [];

  columns = [
    { field: 'symbol', header: 'Symbol Waluty' },
    { field: 'currency', header: 'Waluta' },
    { field: 'rateCurrency', header: 'Kurs waluty' }
  ];

  constructor(private exchangeFinderService: ExchangeFinderService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  dateChanged(event: any) {
    if (!(event instanceof Date)) {
      let validated = this.validateDate(event.target.value);
      if (!validated) {
        return;
      }
      else {
        this.date = event.target.value;
      }
    }
    else {
      this.date = new Date(event).toISOString().split('T')[0];
    }

    this.exchangeFinderService.getExchangeForDate(this.date).pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.statusText });
      }
    })
  }

  validateDate(date: string) {
    return new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).test(date);
  }

}
