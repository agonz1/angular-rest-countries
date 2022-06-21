import { EventEmitter, Injectable } from "@angular/core";
import { Country } from "src/app/shared/country.model";

@Injectable()
export class CountryService {
    countries: Country[];
    country: Country;
    searchingByRegion: boolean;
    currentRegion: string;
   
    countriesChanged: EventEmitter<Country[]> = new EventEmitter<Country[]>();

    countryChanged: EventEmitter<Country> = new EventEmitter<Country>();

    constructor(){
    }

    getCountries() : Country[] {
        return this.countries.slice();
    }

    setCountries(countries: Country[]){
        this.countries = countries;
        this.countriesChanged.emit(this.getCountries());
    }

    setCountry(country: Country){
        this.country  = country;
        this.countryChanged.emit(this.country);

        this.country.currencies = Object.values(this.country.currencies)[0];
        this.country.nativeName = Object.values(this.country.nativeName)[1];

        this.country.languages = Object.values(this.country.languages).toString().replace(/,/gi, ', ');
    }

    search(keyword: string){
        if(this.currentRegion){
            return this.searchByRegion(this.currentRegion).filter(c => c.name.toLowerCase().includes(keyword.toLowerCase()));
        }

        return this.countries.filter(c => c.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    searchByRegion(keyword: string){
        this.currentRegion = keyword;

        return this.countries.filter(c => c.region.toLowerCase() === keyword.toLowerCase());
    }
}