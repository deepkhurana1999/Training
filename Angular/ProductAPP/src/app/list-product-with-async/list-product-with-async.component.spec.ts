import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductWithAsyncComponent } from './list-product-with-async.component';

describe('ListProductWithAsyncComponent', () => {
  let component: ListProductWithAsyncComponent;
  let fixture: ComponentFixture<ListProductWithAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductWithAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductWithAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
