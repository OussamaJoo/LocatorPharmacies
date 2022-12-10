import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PharmacieDetailService {

 
  private apiUrl = 'http://localhost:4050/api/';

  constructor(private httpClient: HttpClient) {}

  

  



}
