import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGetComponent } from './product-get.component';

describe('ProductGetComponent', () => {
  let component: ProductGetComponent;
  let fixture: ComponentFixture<ProductGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGetComponent]
    });
    fixture = TestBed.createComponent(ProductGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
