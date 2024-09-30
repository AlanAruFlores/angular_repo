import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaViewComponentDosComponent } from './nueva-view-component-dos.component';

describe('NuevaViewComponentDosComponent', () => {
  let component: NuevaViewComponentDosComponent;
  let fixture: ComponentFixture<NuevaViewComponentDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaViewComponentDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaViewComponentDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
