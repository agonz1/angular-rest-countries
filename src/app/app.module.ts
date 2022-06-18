import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CountryCardComponent } from './pages/countries/card/country-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ListCountriesComponent,
    CountryCardComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
