import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhPComponent } from './add-wh-p.component';

describe('AddWhPComponent', () => {
  let component: AddWhPComponent;
  let fixture: ComponentFixture<AddWhPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWhPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
