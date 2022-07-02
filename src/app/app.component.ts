import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentProfile';
  student :any =[];
  neededArray:any =[];
  key :any;
  value:any;
  searchInput:any;
  apiURL = 'https://api.hatchways.io/assessment/students'; 
  constructor(private http:HttpClient,
    private router:Router) {
      
     }

  
  ngOnInit() {

    this.getProducts();
}




public getContacts(url?: string){   

  return this.http.get<any>(`${this.apiURL}`,
  { observe: 'response' }).pipe(tap(res => {
    return res;
  }));
}

 getProducts() {
  this.student = [];
  this.getContacts().subscribe((res :any) => {      
    this.student = res.body;
    for (let [key, value] of Object.entries(this.student)) {
      this.key = key;
      this.value = value;
      console.log("key", key)
      console.log("vlaue", value)
      for(const y in this.value) {
        this.neededArray.push({y, value: this.value[y]});
       
     }
     
      console.log("this.neededArray", this.neededArray)
  }
  });
}



}
