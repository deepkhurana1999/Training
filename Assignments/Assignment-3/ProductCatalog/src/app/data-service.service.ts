import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from './category/ICategory';
import { IProduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  Products: IProduct[] = [];
  Categories: ICategory[] = [];
  
  category$: BehaviorSubject<ICategory[]>;
  product$: BehaviorSubject<IProduct[]>;
  constructor()
  {
    this.Categories = [
      {
        ID:1,
        Name:"Technology Goods",
        ShortCode:"Tech",
        Description:"Technical goods" 
      },
      {
        ID:2,
        Name:"Luxury Goods",
        ShortCode:"Luxu",
        Description:"Luxury goods" 
      },
      {
        ID:3,
        Name:"Commodities Goods",
        ShortCode:"Comm",
        Description:"Commdities goods" 
      },
      {
        ID:4,
        Name:"Regular Goods",
        ShortCode:"Regular",
        Description:"Regular goods" 
      },
      {
        ID:5,
        Name:"Smart Goods",
        ShortCode:"Smart",
        Description:"Smart goods" 
      },
    ];
    this.category$ = new BehaviorSubject(this.Categories);
    this.product$ = new BehaviorSubject(this.Products);
  }
  GetProductList(): IProduct[]
  {
    return this.Products;
  }
  GetCategoryList(): ICategory[]
  {
    return this.Categories;
  }

  AddProduct(product: IProduct)
  {
    this.Products.push(product);
    this.product$.next(this.Products);
  }
  AddCategory(category: ICategory)
  {
    this.Categories.push(category);
    this.category$.next(this.Categories);
  }
  DeleteCategory(cat: ICategory[])
  {
    for (const c of cat) {
      let index = this.Categories.indexOf(c);
      this.Categories.splice(index,1);
    }
    this.category$.next(this.Categories);
  }

  DeleteProduct(prod: IProduct[])
  {
    for (const p of prod) {
      let index = this.Products.indexOf(p);
      this.Products.splice(index,1);
    }
    this.product$.next(this.Products);
  }
}
