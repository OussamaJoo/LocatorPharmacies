import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pharmacie-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Pharmacy Locator';

  constructor() { }

  ngOnInit(): void {
  }

}
