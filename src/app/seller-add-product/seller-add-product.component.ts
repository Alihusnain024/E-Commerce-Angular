import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string|undefined;

  constructor(private product:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  submitProduct(data:Product){
    this.product.addProduct(data).subscribe((res)=>{
      console.warn(res);
      if(res){
        this.addProductMessage='Products added successfully';
        this.router.navigate(['seller-home']);

      }
      setTimeout(() => {
        this.addProductMessage=undefined;
        
      }, 5000);
      
    })
  }

}
