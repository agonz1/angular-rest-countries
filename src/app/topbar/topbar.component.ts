import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['../app.component.css', './topbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopbarComponent implements OnInit {

  faMoon = faMoon;

  constructor() { }

  ngOnInit(): void {
  }

}
