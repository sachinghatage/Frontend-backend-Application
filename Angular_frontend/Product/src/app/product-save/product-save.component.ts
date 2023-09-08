import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent {
  fg!:FormGroup

  constructor(private productService:ProductService,private fb:FormBuilder){
    this.fg=new FormBuilder().group({
      productId:['',Validators.required],
      productName:['',Validators.required],
      productCost:[],
      productDescription:[],
      vendor:[]
    })
  }

  saveProduct(){
    this.productService.saveProduct(this.fg.value).subscribe(data=>{
      console.log(data)
      alert("product added")
    });
  }
}
