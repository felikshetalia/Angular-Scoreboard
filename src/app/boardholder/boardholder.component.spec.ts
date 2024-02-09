import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardholderComponent } from './boardholder.component';

describe('BoardholderComponent', () => {
  let component: BoardholderComponent;
  let fixture: ComponentFixture<BoardholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardholderComponent]
    });
    fixture = TestBed.createComponent(BoardholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
