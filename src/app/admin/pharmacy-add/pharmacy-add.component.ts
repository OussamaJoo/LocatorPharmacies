import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pharmacie } from '../../pharmacie';
import { AdminService } from '../admin.service';

@Component({
  selector: 'pharmacie-pharmacy-add',
  templateUrl: './pharmacy-add.component.html',
  styleUrls: ['./pharmacy-add.component.css']
})
export class PharmacyAddComponent implements OnInit {

  pharmacie: Pharmacie;

  pharmaices: Pharmacie[];
  



  pharmacyDetails = new FormGroup({
    
    pharmCategory : new FormControl('',[Validators.required]),
    noPh : new FormControl('',[Validators.required]),
    pharmName: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern("[0-9]{8}")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    maps: new FormControl('',[Validators.required]),
    currentAdress: new FormControl('',[Validators.required])
    
  });

  constructor(private router: Router, private adminService: AdminService) {
    // console.log(this.pharmacyDetails);
    
  

  }

  ngOnInit(): void {
  }

  typeOrPharmCatSelected() {
    
  }

  addPharmacy() {
    if(!this.pharmacyDetails.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    // console.log(this.pharmacyDetails);
    
    const pharmacy = this.pharmacyDetails.getRawValue();
    
    this.adminService.addPharmacy(pharmacy).subscribe(message => {
      alert("Pharmacie Ajoutée");
      this.router.navigate(['/admin/viewPharmacy']);
    });

    this.adminService.AllPharmacies()
    .subscribe((data) => {
        this.pharmaices = data; 
      }
    );
  }



  get email() {
    return this.pharmacyDetails.get('email');
  } 

  get mobileNo() {
    return this.pharmacyDetails.get('mobileNo');
  } 

  

}
