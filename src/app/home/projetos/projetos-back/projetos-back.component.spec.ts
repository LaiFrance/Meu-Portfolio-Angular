import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosBackComponent } from './projetos-back.component';

describe('ProjetosBackComponent', () => {
  let component: ProjetosBackComponent;
  let fixture: ComponentFixture<ProjetosBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
