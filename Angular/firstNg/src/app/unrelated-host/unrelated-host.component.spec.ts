import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedHostComponent } from './unrelated-host.component';

describe('UnrelatedHostComponent', () => {
  let component: UnrelatedHostComponent;
  let fixture: ComponentFixture<UnrelatedHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrelatedHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrelatedHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
