import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products/IProduct';

@Pipe({
  name: 'productPriceFilter'
})
export class ProductPriceFilterPipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args)
      return value;
    return value.filter((item) => item.Price>args);
  }

}
