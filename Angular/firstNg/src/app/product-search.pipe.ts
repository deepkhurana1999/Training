import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products/IProduct';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if(!args)
      return value;
    return value.filter((item) => item.Title.toLowerCase().indexOf(args.toLowerCase()) > -1);
  }

}
