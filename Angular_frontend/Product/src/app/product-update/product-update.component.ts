import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent  {
  fg!:FormGroup
  
 constructor(private productService:ProductService,private fb : FormBuilder,private route: ActivatedRoute){
   this.fg= new FormBuilder().group(
     {productId:['',Validators.required],
     productName: ['',Validators.required],
     productCost: [],
     productDescription:[],
     productVendor:[]
   }
   )
 }
  id!:number
  ngOnInit(){
    this.route.params.subscribe(product=>{
      this.id=product["id"]
    })
  }
 
  updateProduct(){
    this.productService.updateProduct(this.fg.value,this.id).subscribe(data=>{
      console.log(data)
      alert(this.id+" Updated")
    })
  }
}
