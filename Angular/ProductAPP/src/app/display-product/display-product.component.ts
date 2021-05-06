import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  product: Product
  productForm: FormGroup;
  product$: Observable<Product[]>;
  editRoute: string = '';
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
    this.product.id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.data.GetAProduct(this.product.id).subscribe(data=> {this.product = data; this.PushData(); this.editRoute="../edit/"+this.product.id;});
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
