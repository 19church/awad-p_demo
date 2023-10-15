import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataproductComponent } from './updataproduct.component';

describe('UpdataproductComponent', () => {
  let component: UpdataproductComponent;
  let fixture: ComponentFixture<UpdataproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdataproductComponent]
    });
    fixture = TestBed.createComponent(UpdataproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
