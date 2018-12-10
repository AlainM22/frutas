import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorFrutasComponent } from './gestor-frutas.component';

describe('GestorFrutasComponent', () => {
  let component: GestorFrutasComponent;
  let fixture: ComponentFixture<GestorFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
