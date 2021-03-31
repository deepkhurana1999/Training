import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtDataBindingComponent } from './t-shirt-data-binding.component';

describe('TShirtDataBindingComponent', () => {
  let component: TShirtDataBindingComponent;
  let fixture: ComponentFixture<TShirtDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
