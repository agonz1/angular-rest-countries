import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Country, Region } from 'src/app/shared/country.model';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../country.service';
import { DatastorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountryDetailComponent implements OnInit {

  faArrowLeftLong = faArrowLeftLong;

  country: Country;
  
  constructor(private route: ActivatedRoute, private cService: CountryService, private dsService: DatastorageService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params: Params) => {
        const name = params['countryName'];

  
          this.dsService.fetchByName(name);
        
          this.cService.countryChanged.subscribe(c => this.country = c);
  
       
      });
  }

}
