import { Component, OnInit } from '@angular/core';
import { CountryService } from './pages/list-countries/country.service';
import { DatastorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatastorageService, CountryService]
})
export class AppComponent implements OnInit{
  title = 'angular-rest-countries';

  constructor(private dsService: DatastorageService){}

  ngOnInit(): void {
  }
  
}
