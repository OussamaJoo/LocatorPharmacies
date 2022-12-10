import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, toArray } from 'rxjs/operators';
import { EMPTY, of, throwError } from 'rxjs';
import { Pharmacie } from '../../app/pharmacie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:4050/api/pharmacie/';

  constructor(private httpClient: HttpClient, private router: Router) { }

  addPharmacy(pharmacyToSave: Pharmacie) {
    return this.httpClient.post<any>(this.apiUrl,pharmacyToSave).pipe
    (
      switchMap(({ pharmacy, msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(err => {
        // console.log(`server error occured`, err);
        const msg = 'Registration failed please contact to admin';
        return of(msg);
      })
    );
  }

  updatePharmacy(id: any ,pharmacyToUpdate: any) {
    // console.log(`updating pharmacy details`);
    // console.log(pharmacyToUpdate);
    return this.httpClient.put<any>(`${this.apiUrl}${id}`,pharmacyToUpdate)
   
  }

  removePharmacy(pharmacyToRemove: any) {
    return this.httpClient.delete<any>(`${this.apiUrl}${pharmacyToRemove}`)
    
    
  }

  AllPharmacies() {
    return this.httpClient.get<any>(this.apiUrl)
  }

  findPharmacyId(id: any){
    return this.httpClient.get<any>(`${this.apiUrl}${id}`)
  }

  DayPharmacies() {
    return this.httpClient.get<any>(`${this.apiUrl}day`)
  }

  NightPharmacies() {
    return this.httpClient.get<any>(`${this.apiUrl}night`)
  }
  Parapharmacies() {
    return this.httpClient.get<any>(`${this.apiUrl}parapharmacies`)
  }

  
  



  

  
  getAllUsers() {
    return this.httpClient.get<any>(`http://localhost:4050/api/users/AllUser`).pipe
    (
      switchMap(({ users }) => {
        return of(users);
      }),
      catchError(err => {
        return throwError(`Users Details not fetch. Please try again`);
      })
    );
  }

  updateUser(user: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/users/userUpdate`,user)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "User Details not Updated. Please try again";
        return of(error);
      })
    );
  }

}
