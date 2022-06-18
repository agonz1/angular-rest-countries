import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Country, Region } from 'src/app/shared/country.model';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListCountriesComponent implements OnInit {
  
  faSearch = faSearch;
  faAngleDown = faAngleDown;
  country: Country = {
    name: "Germany", population: 81770900,
    nativeName: '',
    subRegion: '',
    currencies: [],
    languages: [],
    topLevelDomain: '',
    borderCountries: [],
    region: Region.EUROPE,
    capital: 'Berlin',
    imageUrl: 'https://flagcdn.com/w320/de.png'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
