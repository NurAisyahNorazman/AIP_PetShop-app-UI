import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAllComponent } from './pet-all.component';

describe('PetAllComponent', () => {
  let component: PetAllComponent;
  let fixture: ComponentFixture<PetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
