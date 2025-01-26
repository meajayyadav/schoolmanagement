import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCodeComponent } from './system-code.component';

describe('SystemCodeComponent', () => {
  let component: SystemCodeComponent;
  let fixture: ComponentFixture<SystemCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
