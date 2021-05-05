import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-list-product-with-async',
  templateUrl: './list-product-with-async.component.html',
  styleUrls: ['./list-product-with-async.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProductWithAsyncComponent implements OnInit {

  @Input() products: Observable<Product[]>;
  constructor() {
    this.products = new Observable<Product[]>();
  }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    
  }

}
