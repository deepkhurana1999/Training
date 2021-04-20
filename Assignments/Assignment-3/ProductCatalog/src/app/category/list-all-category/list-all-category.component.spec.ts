import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCategoryComponent } from './list-all-category.component';

describe('ListAllCategoryComponent', () => {
  let component: ListAllCategoryComponent;
  let fixture: ComponentFixture<ListAllCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
