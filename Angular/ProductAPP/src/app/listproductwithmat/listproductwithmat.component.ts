import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-listproductwithmat',
  templateUrl: './listproductwithmat.component.html',
  styleUrls: ['./listproductwithmat.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListproductwithmatComponent implements OnInit {

  productList: Product[] =[];
  @Input() products: Observable<Product[]>;
  @Output() DeleteEmitter: EventEmitter<number>;
  displayedColumns: string[] = ['id', 'title', 'price', 'quantity','inStock','expiryDate','edit','delete'];
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
