import { ProductPriceFilterPipe } from './product-price-filter.pipe';

describe('ProductPriceFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductPriceFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
