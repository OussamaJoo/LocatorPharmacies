import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pharmacie } from 'src/app/pharmacie';
import { ViewAllPharmacyService } from './view-all-pharmacy.service';

@Component({
  selector: 'view-all-pharmacy',
  templateUrl: './view-all-pharmacy.component.html',
  styleUrls: ['./view-all-pharmacy.component.css',
    '../pharmacy-add/pharmacy-add.component.css'
  ]
})


export class ViewAllPharmacyComponent implements OnInit {

  pharmacys: Pharmacie[] = [];
  pharmacysDay: Pharmacie[] = [];
  pharmacysNight: Pharmacie[] = [];
  msg: string;


  constructor(private viewAllPharmacyService: ViewAllPharmacyService, private router: Router) 
  { 
    this.viewAllPharmacyService.findPharmacy()
    .subscribe((data) => {
        this.pharmacys = data; 
      }
    );
    this.viewAllPharmacyService.numberPharmacyNight()
    .subscribe((data) => {
        this.pharmacysNight = data;  
      }
    );
    this.viewAllPharmacyService.numberPharmacyDay()
    .subscribe((data) => {
        this.pharmacysDay = data;  
      }
    );
  }

  ngOnInit(): void {
  }

  removePharmacy(n:any,id:any) {
    
    
    if(confirm("Are you sure to delete pharm no " + n)) {
      this.viewAllPharmacyService.removePharmacy(id)
         .subscribe(() => {
          
          window.location.reload();
      }
      );
    }
  }

  
}
