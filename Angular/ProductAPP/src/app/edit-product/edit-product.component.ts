import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  product$: Observable<Product[]>;
  constructor(private route: ActivatedRoute, private data: ProductDataService){
    this.product$ = new Observable<Product[]>();
    this.product = {
      id: -1,
      title: '',
      color: '',
      quantity: 0,
      inStock: false,
      price: -1,
      expiryDate: ''
    }
    this.productForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      expiryDate: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      inStock: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required])
    });
   }

  ngOnInit(): void {
    
    this.product$ = this.data.GetAllProducts();
    this.product.id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.data.GetAProduct(this.product.id).subscribe(data=> {this.product = data; this.PushData();});
    
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

  SaveProduct()
  {
    this.data.UpdateAProduct(this.productForm.value).subscribe();
  }
  
}
