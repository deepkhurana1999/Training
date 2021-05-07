import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Output() DeleteEmitter: EventEmitter<number>;
  productsSubscription: Subscription;
  
  constructor(private cdRef: ChangeDetectorRef) {
    this.products = new Observable<Product[]>();
    this.productsSubscription = new Subscription();
    this.DeleteEmitter = new EventEmitter<number>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.products.subscribe(data => {
      this.productList=data;
      this.cdRef.markForCheck();
    }); 
  }

  ngOnInit(): void {
    
  }

  DeleteProduct(id: number)
  {
    this.DeleteEmitter.emit(id);
  }

}
