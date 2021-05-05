import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm: FormGroup;
  constructor(private data: ProductDataService) {
    this.productForm = new FormGroup({
      id: new FormControl(null,[]),
      title: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]), //priceRangeValidator(this.minPrice,this.maxPrice)]),
      expiryDate: new FormControl(null,[Validators.required]),
      quantity: new FormControl(null,[Validators.required]),
      inStock: new FormControl(true,[]),
      color: new FormControl(null,[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  AddProduct()
  {
    this.data.PostAProduct(this.productForm?.value).subscribe();
    this.productForm.reset();
  }

}
