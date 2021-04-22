import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from './category/ICategory';
import { IProduct } from './product/IProduct';
import { ProductRoutingModule } from './product/product-routing.module';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  static productID = 0;
  static categoryID = 0;
  static productShortCodeSet : Set<string>;
  static categoryShortCodeSet : Set<string>;

  Products: IProduct[] = [];
  Categories: ICategory[] = [];
  
  category$: BehaviorSubject<ICategory[]>;
  product$: BehaviorSubject<IProduct[]>;
  
  productSCodeSet$: BehaviorSubject<Set<string>>;
  categorySCodeSet$: BehaviorSubject<Set<string>>;

  constructor()
  {
    DataServiceService.productShortCodeSet = new Set<string>();
    DataServiceService.categoryShortCodeSet = new Set<string>();
    DataServiceService.productShortCodeSet.add("Norton");
    DataServiceService.productShortCodeSet.add("P2");

    DataServiceService.categoryShortCodeSet.add("Tech");
    DataServiceService.categoryShortCodeSet.add("Luxu");
    DataServiceService.categoryShortCodeSet.add("Comm");
    DataServiceService.categoryShortCodeSet.add("Regular");
    DataServiceService.categoryShortCodeSet.add("Smart");
    
    this.Categories = [
      {
        ID: ++DataServiceService.categoryID,
        Name:"Technology Goods",
        ShortCode:"Tech",
        Description:"Technical goods" 
      },
      {
        ID: ++DataServiceService.categoryID,
        Name:"Luxury Goods",
        ShortCode:"Luxu",
        Description:"Luxury goods" 
      },
      {
        ID:++DataServiceService.categoryID,
        Name:"Commodities Goods",
        ShortCode:"Comm",
        Description:"Commdities goods" 
      },
      {
        ID:++DataServiceService.categoryID,
        Name:"Regular Goods",
        ShortCode:"Regular",
        Description:"Regular goods" 
      },
      {
        ID:++DataServiceService.categoryID,
        Name:"Smart Goods",
        ShortCode:"Smart",
        Description:"Smart goods" 
      },
    ];

    
    this.Products = [
      {
        ID: ++DataServiceService.productID,
        Name:"Norton Antivirus",
        ShortCode:"Norton",
        Description:"Technical goods",
        Manufacturer: "Norton",
        SellingPrice: 100,
        Categories: [this.Categories[0]]
      },
      {
        ID: ++DataServiceService.productID,
        Name:"Lenovo P2",
        ShortCode:"P2",
        Description:"Smartphone",
        Manufacturer: "Lenovo",
        SellingPrice: 1200,
        Categories: [this.Categories[0],this.Categories[4]]
      }
    ];

   
    this.category$ = new BehaviorSubject(this.Categories);
    this.product$ = new BehaviorSubject(this.Products);
    this.productSCodeSet$ = new BehaviorSubject(DataServiceService.productShortCodeSet);
    this.categorySCodeSet$ = new BehaviorSubject(DataServiceService.categoryShortCodeSet);
  }

  GetProductList(): IProduct[]
  {
    return this.Products;
  }
  GetCategoryList(): ICategory[]
  {
    return this.Categories;
  }

  IsProductShortCodeUnique(shortcode: string)
  {
    return DataServiceService.productShortCodeSet.has(shortcode);
  }

  IsCategoryShortCodeUnique(shortcode: string)
  {
    return DataServiceService.categoryShortCodeSet.has(shortcode);
  }

  AddProductShortCodeUnique(shortcode: string)
  {
    DataServiceService.productShortCodeSet.add(shortcode);
    this.productSCodeSet$.next(DataServiceService.productShortCodeSet);
  }

  
  AddCategoryShortCodeUnique(shortcode: string)
  {
    DataServiceService.categoryShortCodeSet.add(shortcode);
    this.categorySCodeSet$.next(DataServiceService.categoryShortCodeSet);
  }
  AddProduct(product: IProduct)
  {
    product.ID = ++DataServiceService.productID;
    this.Products.push(product);
    this.product$.next(this.Products);
  }
  
  AddCategory(category: ICategory)
  {
    category.ID = ++DataServiceService.categoryID;
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
