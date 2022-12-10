
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Pharmacie } from '../pharmacie';
import { ViewAllPharmacyService } from '../admin/view-all-pharmacy/view-all-pharmacy.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pm-ltineraire',
  templateUrl: './ltineraire.component.html',
  styleUrls: ['./ltineraire.component.css',
     '../admin/view-all-pharmacy/view-all-pharmacy.component.css',
     '../admin/pharmacy-add/pharmacy-add.component.css'
             ]
          })
export class LtineraireComponent implements OnInit {

  pharmacys: Pharmacie[] = []
  searchIsDone: boolean = false;
  searchmsg: string = "No Student Found!!";
  searchPharmacie: Pharmacie[] = []

  AdressSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required])
  });
  
  view:ViewAllPharmacyService
  adminService:AdminService
  
  
  constructor(private srvice:AdminService,private router: Router,private actRoute: ActivatedRoute) { 
    this.srvice.DayPharmacies().subscribe((data) => {
      this.pharmacys = data; 
    }
  );

  }

  ngOnInit(): void {}
    

  searchAdress() 
  {
    this.searchIsDone = false;
    if(!this.AdressSearch.valid) {
      alert('please enter Adress');
      return;
    }
    const AdressDetails = this.AdressSearch.getRawValue();
    this.searchPharmacie = this.pharmacys.filter(a => a.currentAdress == AdressDetails.rNo);
    this.searchIsDone = true;
  }

  
  

  

}
