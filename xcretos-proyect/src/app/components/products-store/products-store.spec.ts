import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStore } from './products-store';

describe('ProductsStore', () => {
  let component: ProductsStore;
  let fixture: ComponentFixture<ProductsStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
