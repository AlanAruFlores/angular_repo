import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaViewComponentComponent } from './nueva-view-component.component';

describe('NuevaViewComponentComponent', () => {
  let component: NuevaViewComponentComponent;
  let fixture: ComponentFixture<NuevaViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
