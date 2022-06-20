import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CountryCardComponent } from './pages/countries/card/country-card.component';
import { FormsModule } from '@angular/forms';
import { DarkmodeDirective } from './shared/darkmode.directive';
import { CountryDetailComponent } from './pages/list-countries/details/country-detail/country-detail.component'
import { RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from './shared/spinner/spinner.component';

const appRoutes: Routes = [
  { path: 'home', component: ListCountriesComponent },
  { path: 'details/:countryName', component: CountryDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ListCountriesComponent,
    CountryCardComponent,
    DropdownDirective,
    DarkmodeDirective,
    CountryDetailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
