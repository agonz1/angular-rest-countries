import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Country } from "src/app/shared/country.model";
import { CountryService } from "../../list-countries/country.service";

@Component({
    selector: 'app-country-card',
    styleUrls: ['./country-card.component.css'],
    templateUrl: './country-card.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CountryCardComponent{
    @Input() country: Country;

    constructor(private cService: CountryService, private router: Router){

    }

    onDetails(){
        this.router.navigate(['/details/' + this.country.name.toLowerCase()]);
    }
}