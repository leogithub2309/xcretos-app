import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualStore } from './virtual-store';

describe('VirtualStore', () => {
  let component: VirtualStore;
  let fixture: ComponentFixture<VirtualStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
