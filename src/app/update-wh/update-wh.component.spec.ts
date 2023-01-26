import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWhComponent } from './update-wh.component';

describe('UpdateWhComponent', () => {
  let component: UpdateWhComponent;
  let fixture: ComponentFixture<UpdateWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
