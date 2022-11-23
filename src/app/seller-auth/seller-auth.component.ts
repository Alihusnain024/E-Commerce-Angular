import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellService,private router:Router, private seller1:SellService ) { }

 showLogin=false;
 authError:string='';
  signUp(data: SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
    
  }
  login(data: login): void {
    this.authError='';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not corrected";


      }


    })

    
  }
  ngOnInit():void{
    this.seller1.reloadSeller();

  }
  openLogin(){
    this.showLogin=true;

  }
openSignUp(){
  this.showLogin=false;
}

}
