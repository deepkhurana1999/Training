import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ICategory } from 'src/app/category/ICategory';
import { DataServiceService } from '../../data-service.service';
import { IProduct } from '../IProduct';

function CategoryValidator(obj:{uniqueSet: Set<string>}) : ValidatorFn
{
  return (control: AbstractControl): {[key:string] : boolean} | null =>
  {
    if(control.value !== undefined && control.value == "Choose the category" || obj.uniqueSet.has(control.value))
      return {'categoryerror': true};
    else{
      if(!obj.uniqueSet.has(control.value))
        obj.uniqueSet.add(control.value);
    }
    return null;
  };
}

function ShortCodeValidator(dataService: DataServiceService) : ValidatorFn
{
  return (control: AbstractControl): {[key:string] : boolean} | null =>
  {
    if(control.value !== undefined && control.value == "" || dataService.IsProductShortCodeUnique(control.value))
    {
      return {'scodeerror': true};
    }else{
      if(!dataService.IsProductShortCodeUnique(control.value))
      dataService.AddProductShortCodeUnique(control.value);
    }
    return null;
  };
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: IProduct;
  categoryList: ICategory[] =[];
  productForm: FormGroup;
  
  productCategories: Set<string>;

  constructor(private dataService: DataServiceService){
    this.product = {
      ID : 0,
      Name:'',
      Description:'',
      ShortCode: '',
      Manufacturer: '',
      Categories: [{
        ID : 0,
      Name:'',
      Description:'',
      ShortCode: '',
      }
      ],
      SellingPrice: 0
    };
    this.productForm = new FormGroup({});
    this.productCategories = new Set<string>();
  }
  Categories = new FormArray([], [Validators.required]);
  ngOnInit(): void {
    // this.productForm.addControl( "ID", new FormControl(this.product.ID, [Validators.required]));
    this.productForm = new FormGroup({
      ID: new FormControl(null),
      Name: new FormControl(this.product.Name, [Validators.required]),
      Description: new FormControl(this.product.Description, [Validators.required]),
      ShortCode: new FormControl(this.product.ShortCode,[Validators.required, ShortCodeValidator(this.dataService)]),
      Manufacturer: new FormControl(this.product.Manufacturer, [Validators.required]),
      SellingPrice: new FormControl(null, [Validators.required]),
      Categories: new FormArray([], [Validators.required]),
    });
    this.dataService.category$.subscribe((x) => this.categoryList = x);
    this.Categories = this.productForm.get('Categories') as FormArray;
  }
  
  CategoryAdd(){
    let obj= {uniqueSet : this.productCategories};
    this.Categories.push(new FormGroup({
      ID: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required, CategoryValidator(obj)]),
      Description: new FormControl('', [Validators.required]),
      ShortCode: new FormControl('', [Validators.required])
    }));
  }

  OnChange(event: any, index:any)
  {
    if(event.target.value != "Choose the category")
    {    
      console.log(this.categoryList.find((x) => x.ID == event.target.value));
      this.Categories.at(index).setValue(this.categoryList.find((x) => x.ID == event.target.value));
    }
  }
  CategoryRemove(){
    if(this.productCategories.has(this.Categories.at(this.Categories.length-1).get("Name")?.value))
      this.productCategories.delete(this.Categories.at(this.Categories.length-1).get("Name")?.value);
    this.Categories.removeAt(this.Categories.length-1);
  }

  AddData()
  {
    this.dataService.AddProduct(this.productForm?.value);
    this.productForm.reset();
  }}
