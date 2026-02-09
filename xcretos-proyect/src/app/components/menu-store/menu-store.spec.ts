import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStore } from './menu-store';

describe('MenuStore', () => {
  let component: MenuStore;
  let fixture: ComponentFixture<MenuStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
