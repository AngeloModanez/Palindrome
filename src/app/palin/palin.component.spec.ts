import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalinComponent } from './palin.component';

describe('PalinComponent', () => {
  let component: PalinComponent;
  let fixture: ComponentFixture<PalinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
