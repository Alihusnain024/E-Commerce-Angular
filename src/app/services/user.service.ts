import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:SignUp){
    this.http.post('http://localhost:3000/users',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result);
      localStorage.setItem('users',JSON.stringify(result.body));
      this.router.navigate(['/']);
      
    });
    
  } 
}
