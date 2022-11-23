import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { login, SignUp } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);


  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:SignUp){
    this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result);
      localStorage.setItem('seller',JSON.stringify(result.body));
      
    });
    
  } 
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);




    }


  }
  userLogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.warn('User Logged in');
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
     
  
      }
      else{
        this.isLoginError.emit(true);
      }
      
    });

  }
}
