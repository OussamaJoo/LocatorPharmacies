import { Component, OnInit } from '@angular/core';

import { Availability } from '../availability';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'pharmacie-pharmacie-detail',
  templateUrl: './pharmacie-detail.component.html',
  styleUrls: ['./pharmacie-detail.component.css']
})
export class PharmacieDetailComponent implements OnInit {




  availability: Availability = {
    
    NightPharmacies: 0,  // 15
    DayPharmacies: 0, // 10
    Parapharmacies: 0 //15
   
  };

  constructor(private adminService: AdminService) 
  { 
    
    this.adminService.DayPharmacies().subscribe((total) => { this.availability.DayPharmacies = total.length; });
    this.adminService.NightPharmacies().subscribe((total) => { this.availability.NightPharmacies = total.length; });
    this.adminService.Parapharmacies().subscribe((total) => { this.availability.Parapharmacies = total.length; });
  }
  
  ngOnInit(): void {
  }

}
