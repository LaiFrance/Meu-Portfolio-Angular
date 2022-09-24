import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucurriculoComponent } from './meucurriculo.component';

describe('MeucurriculoComponent', () => {
  let component: MeucurriculoComponent;
  let fixture: ComponentFixture<MeucurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeucurriculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeucurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
