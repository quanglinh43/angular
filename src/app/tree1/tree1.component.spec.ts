import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree1Component } from './tree1.component';

describe('Tree1Component', () => {
  let component: Tree1Component;
  let fixture: ComponentFixture<Tree1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tree1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tree1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
