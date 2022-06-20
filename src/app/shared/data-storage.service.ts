import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CountryService } from "../pages/list-countries/country.service";
import { Country } from "./country.model";

@Injectable()
export class DatastorageService{
    getAllEndPoint: string = "https://restcountries.com/v3.1/all";
    getByNameEndPoint: string = "https://restcountries.com/v3.1/name/";

    constructor(private cService: CountryService, private httpClient: HttpClient){}

    fetchAllCountries(){
        return this.httpClient.get(this.getAllEndPoint).pipe(
            map(response => {
                const countryArray: Country[] = [];
                for(const key in response){
                    if(response.hasOwnProperty(key)){
                        const countryObject = response[key];
                        countryArray.push({
                                name: countryObject.name.common,
                                population: countryObject.population,
                                nativeName: countryObject.name.nativeName,
                                subRegion: countryObject.subregion,
                                currencies: countryObject.currencies,
                                languages: countryObject.languages,
                                topLevelDomain: '',
                                borderCountries: countryObject.borders,
                                region: countryObject.region,
                                capital: countryObject.capital,
                                imageUrl: countryObject.flags.png
                            })
                    }}
                return countryArray;
            }
            )).subscribe(countries => this.cService.setCountries(countries));
    }

    fetchByName(countryName: string){
        return this.httpClient.get(this.getByNameEndPoint + countryName).pipe(
            map(response => {

                const responseObj = response[0];

                const country: Country = {
                    name: responseObj.name.common,
                    population: responseObj.population,
                    nativeName: Object.values(responseObj.name.nativeName)[0],
                    subRegion: responseObj.subregion,
                    currencies: Object.values(responseObj.currencies)[0],
                    languages: responseObj.languages,
                    topLevelDomain: responseObj.tld,
                    borderCountries: responseObj.borders,
                    region: responseObj.region,
                    capital: responseObj.capital,
                    imageUrl: responseObj.flags.png
                }
                return country;
            }
            )
        ).subscribe(c => this.cService.setCountry(c));
    }

}