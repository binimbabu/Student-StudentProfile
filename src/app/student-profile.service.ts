import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {
  apiURL = 'https://api.hatchways.io/assessment/students'; 
  constructor(private http:HttpClient,
    private router:Router) { }

    getStudentByProfile() {
      return this.http.get<any>(`${this.apiURL}`,
      { observe: 'response' }).pipe(tap(res => {
        return res;
      }));
    }
}
