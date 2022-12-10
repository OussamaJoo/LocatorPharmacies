import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewAllPharmacyService {

  private apiUrl = 'http://localhost:4050/api/pharmacie/';

  constructor(private httpClient: HttpClient) { }

  findPharmacy() {
    // console.log(`serching pharmacys`);
    return this.httpClient.get<any>(this.apiUrl)
   
  }

  numberPharmacyNight(){
    return this.httpClient.get<any>(`${this.apiUrl}night`)
  }

  numberPharmacyDay(){
    return this.httpClient.get<any>(`${this.apiUrl}day`)
  }

  removePharmacy(pharmacyToRemove: any) {
    return this.httpClient.delete<any>(`${this.apiUrl}${pharmacyToRemove}`)
  }
  
  findPharmacyId(id: any){
    return this.httpClient.get<any>(`${this.apiUrl}${id}`)
  }


}
