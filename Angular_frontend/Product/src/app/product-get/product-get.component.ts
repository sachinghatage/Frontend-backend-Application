import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit{
  [x: string]: any;
  products:Product[]=[];

  constructor(private productService:ProductService){}

  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data
    },
    
    error=>{
      this.products=[];
      console.log(error);}
    );
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
        this.getAllProducts();
    })
  }

}
