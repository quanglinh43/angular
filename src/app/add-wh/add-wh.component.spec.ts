import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhComponent } from './add-wh.component';

describe('AddWhComponent', () => {
  let component: AddWhComponent;
  let fixture: ComponentFixture<AddWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
