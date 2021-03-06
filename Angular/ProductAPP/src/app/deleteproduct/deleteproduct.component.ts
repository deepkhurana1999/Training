import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  id: number = -1;
  product: Product = {
    id: -1,
    title: '',
    color: '',
    quantity: -1,
    price: -1,
    expiryDate: '',
    inStock: false
  };

  productForm: FormGroup;
  product$: Observable<Product[]>;
  
  constructor(private data: ProductDataService, private router: Router) {
    this.product$ = new Observable<Product[]>();
    
    this.productForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl({value:null,disabled:true}),
      price: new FormControl({value:null,disabled:true}),
      expiryDate: new FormControl({value:null,disabled:true}),
      quantity: new FormControl({value:null,disabled:true}),
      inStock: new FormControl({value:null,disabled:true}),
      color: new FormControl({value:null,disabled:true})
    });
  }

  ngOnInit(): void {
    this.product$ = this.data.GetAllProducts();
  }

  ProductSelector()
  {
    this.data.GetAProduct(this.id).subscribe(data=> {this.product = data; this.PushData();});
  }

  PushData()
  {
    this.productForm.get("id")?.setValue(this.product.id);
    this.productForm.get("price")?.setValue(this.product.price);
    this.productForm.get("quantity")?.setValue(this.product.quantity);
    this.productForm.get("inStock")?.setValue(this.product.inStock);
    this.productForm.get("title")?.setValue(this.product.title);
    this.productForm.get("color")?.setValue(this.product.color);
    this.productForm.get("expiryDate")?.setValue(this.product.expiryDate.slice(0,10));
  }
  DeleteProduct()
  {
    this.data.DeleteAProduct(this.product.id).subscribe();
  }

}
