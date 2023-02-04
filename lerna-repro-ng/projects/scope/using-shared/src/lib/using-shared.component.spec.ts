import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSharedComponent } from './using-shared.component';

describe('UsingSharedComponent', () => {
  let component: UsingSharedComponent;
  let fixture: ComponentFixture<UsingSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
