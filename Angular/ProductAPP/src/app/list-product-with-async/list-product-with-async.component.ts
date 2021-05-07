import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() DeleteEmitter: EventEmitter<number>;
  constructor() {
    this.products = new Observable<Product[]>();
    this.DeleteEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  DeleteProduct(id: number)
  {
    this.DeleteEmitter.emit(id);
  }

}
