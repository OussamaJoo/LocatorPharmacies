import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Pharmacie } from '../pharmacie';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'pm-ltineraire-night',
  templateUrl: './ltineraire-night.component.html',
  styleUrls: ['./ltineraire-night.component.css','../admin/view-all-pharmacy/view-all-pharmacy.component.css',
  '../admin/pharmacy-add/pharmacy-add.component.css']
})
export class LtineraireNightComponent implements OnInit {

  pharmacys: Pharmacie[] = []
  searchIsDone: boolean = false;
  searchmsg: string = "No Student Found!!";
  searchPharmacie: Pharmacie[] = []

  AdressSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required])
  });

  constructor(private srvice:AdminService,private router: Router,private actRoute: ActivatedRoute) { 
    this.srvice.NightPharmacies().subscribe((data) => {
      this.pharmacys = data; 
    }
  );
  }

  ngOnInit(): void {
  }

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
