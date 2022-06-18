import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Country } from "src/app/shared/country.model";

@Component({
    selector: 'app-country-card',
    styleUrls: ['./country-card.component.css'],
    templateUrl: './country-card.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CountryCardComponent{
    @Input() country: Country;

    constructor(){

    }
}