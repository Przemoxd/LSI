import { exchangeRate } from "./exchangeRate";

export interface exchangeRatesTable {
    table: string;
    no: string;
    effectiveDate: string;
    rates: Array<exchangeRate>
}