import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductwithmatComponent } from './listproductwithmat.component';

describe('ListproductwithmatComponent', () => {
  let component: ListproductwithmatComponent;
  let fixture: ComponentFixture<ListproductwithmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductwithmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductwithmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
