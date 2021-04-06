import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProduct } from '../products/IProduct';
import { ShareDataService } from '../share-data.service';
function priceRangeValidator(min: number,max:number) : ValidatorFn
{
  return (control: AbstractControl): {[key:string] : boolean} | null =>
  {
    if(control.value !== undefined && Number.isNaN(control.value) || control.value<min || control.value>max)
      return {'priceRange': true};
    return null;
  };
}

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})


export class Child1Component implements OnInit {

  constructor(private dataService: ShareDataService) { }
  
  product: IProduct;
  productForm: FormGroup;
  minPrice= 0;
  maxPrice= 1000;
  ngOnInit(): void {
    this.dataService.product$.subscribe((p) => {this.product = p});
    this.productForm = new FormGroup({
      ID: new FormControl(this.product.ID, [Validators.required]),
      Title: new FormControl(this.product.Title, [Validators.required]),
      Price: new FormControl(this.product.Price, [Validators.required, priceRangeValidator(this.minPrice,this.maxPrice)]),
      ExpiryDate: new FormControl(this.product.ExpiryDate,[Validators.required]),
      Quantity: new FormControl(this.product.Quantity,[Validators.required]),
      InStock: new FormControl(this.product.InStock,[Validators.required])
    });
  }
  // setData(): void
  // {
  //   this.dataService.setPrice(this.data);
  // }
  
 
  updateData(): void{
    
    console.log(this.productForm.value);
    this.product =  this.productForm?.value;
    
    this.dataService.setData(this.productForm?.value);
  }
}
