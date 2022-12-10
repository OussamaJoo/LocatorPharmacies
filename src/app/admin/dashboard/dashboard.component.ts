import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availability } from 'src/app/availability';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin-pharmacie-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  availability: Availability = {
    
    NightPharmacies: 0,  // 15
    DayPharmacies: 0, // 10
    Parapharmacies: 0, // 15

  };

  constructor(private router: Router, private adminService: AdminService) { 

    this.adminService. DayPharmacies().subscribe((total) => { this.availability.DayPharmacies = total.length; });
    this.adminService.NightPharmacies().subscribe((total) => { this.availability.NightPharmacies = total.length; });
    this.adminService.Parapharmacies().subscribe((total) => { this.availability.Parapharmacies = total.length; });
    
  

  }

  ngOnInit(): void {
  }

}
