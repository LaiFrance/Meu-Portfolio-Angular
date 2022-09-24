import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosTestesComponent } from './projetos-testes.component';

describe('ProjetosTestesComponent', () => {
  let component: ProjetosTestesComponent;
  let fixture: ComponentFixture<ProjetosTestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosTestesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosTestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
