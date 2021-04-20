import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllProductComponent } from './list-all-product.component';

describe('ListAllProductComponent', () => {
  let component: ListAllProductComponent;
  let fixture: ComponentFixture<ListAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
