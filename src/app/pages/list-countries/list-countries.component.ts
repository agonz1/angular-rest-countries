import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Country } from 'src/app/shared/country.model';
import { DatastorageService } from 'src/app/shared/data-storage.service';
import { CountryService } from './country.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListCountriesComponent implements OnInit {
  
  faSearch = faSearch;
  faAngleDown = faAngleDown;
  loadedCountries: Country[];
  searchInput: string = "";
  regionFilterText: string = "Filter by region";
  
  constructor(private cService: CountryService, private dsService: DatastorageService) { }

  ngOnInit(): void {
    this.dsService.fetchAllCountries();
    
    this.cService.countriesChanged.subscribe(countries => {this.loadedCountries = countries});
  }

  onSearch(){
    this.loadedCountries = (!this.searchInput) ? this.cService.getCountries() : this.cService.search(this.searchInput);
  }

  onSearchByRegion(event){ 
    const firstWordPattern = /^\w*/;

    const filter: string = event.target.innerText.match(firstWordPattern)[0];

    if(filter.toLocaleLowerCase() === "all"){
      this.loadedCountries = this.cService.getCountries();
      this.regionFilterText = "Filter by region";
      this.cService.currentRegion  = '';
    } else {
      this.regionFilterText = filter;
      this.loadedCountries = this.cService.searchByRegion(filter);
    }
  }
}
