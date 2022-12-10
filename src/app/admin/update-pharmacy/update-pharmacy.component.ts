import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  FormBuilder } from '@angular/forms';

import { Pharmacie } from 'src/app/pharmacie';
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from '../admin.service';
import { ViewAllPharmacyService } from '../view-all-pharmacy/view-all-pharmacy.service';
import { noConflict } from 'jquery';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'pm-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.css',
    '../view-all-pharmacy/view-all-pharmacy.component.css',
    '../pharmacy-add/pharmacy-add.component.css'
  ]
})
export class UpdatePharmacyComponent implements OnInit {

  
  msg: string;
  submitted = false;
  
 
  pharmacyData: Pharmacie;

  pharmacyDetails = new FormGroup({
    _id:new FormControl ('',[Validators.required]),
    noPh:new FormControl ('',[Validators.required]),
    pharmName:new FormControl ('',[Validators.required]),
     type:new FormControl ('',[Validators.required]),
    pharmCategory:new FormControl ('',[Validators.required]),
    firstName:new FormControl ('',[Validators.required]),
    lastName:new FormControl ('',[Validators.required]), 
    mobileNo:new FormControl ('',[Validators.required, Validators.pattern("[0-9]{8}")]), 
    email:new FormControl ('',[Validators.required, Validators.email]),
    currentAdress:new FormControl ('',[Validators.required])
  })

  

  constructor( private adminService: AdminService,private actRoute: ActivatedRoute,public fb: FormBuilder,private router: Router) 
  { 
    

  }

  

  ngOnInit(): void {
    this.updatePharmacy();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPharmacy(id);
     
  }


  
  

  

  getPharmacy(id:any) {
    this.adminService.findPharmacyId(id).subscribe(data => {
      this.pharmacyDetails.controls['_id'].setValue(data._id);
      this.pharmacyDetails.controls['noPh'].setValue(data.noPh);
      this.pharmacyDetails.controls['type'].setValue(data.type);
      this.pharmacyDetails.controls['pharmCategory'].setValue(data.pharmCategory);
      this.pharmacyDetails.controls['pharmName'].setValue(data.pharmName);
      this.pharmacyDetails.controls['firstName'].setValue(data.firstName);
      this.pharmacyDetails.controls['lastName'].setValue(data.lastName);
      this.pharmacyDetails.controls['mobileNo'].setValue(data.mobileNo);
      this.pharmacyDetails.controls['email'].setValue(data.email);
      this.pharmacyDetails.controls['currentAdress'].setValue(data.currentAdress);
      });
     
  }

 getNo(){
   this.pharmacyData = this.pharmacyDetails.value
    return this.pharmacyData.noPh; 
    
  }

 

  updatePharmacy() {
    this.pharmacyDetails = this.fb.group({
      _id: ['',[Validators.required]],
      noPh: ['',[Validators.required]],
      pharmName: ['',[Validators.required]],
       type: ['',[Validators.required]],
      pharmCategory: ['',[Validators.required]],
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]], 
      mobileNo: ['',[Validators.required, Validators.pattern("[0-9]{8}")]], 
      email: ['',[Validators.required, Validators.email]],
      currentAdress: ['',[Validators.required]]
    })
  }

  modifier() {
   
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.adminService.updatePharmacy(id,this.pharmacyDetails.value)
          .subscribe(res => {
            this.router.navigateByUrl('/admin/viewPharmacy');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    
  }


  

  
  }
  
  


  

   

  

