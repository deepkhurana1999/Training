import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-list-product-with-subscribe',
  templateUrl: './list-product-with-subscribe.component.html',
  styleUrls: ['./list-product-with-subscribe.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProductWithSubscribeComponent implements OnInit, OnChanges {

  productList:Product[]=[];
  @Input() products: Observable<Product[]>;
  productsSubscription: Subscription;
  constructor(private cdRef: ChangeDetectorRef) {
    this.products = new Observable<Product[]>();
    this.productsSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.productsSubscription = this.products.subscribe(data => {
      this.productList=data;
      this.cdRef.markForCheck();
    });
  }

  ngOnChanges():void{
    
  }

}
