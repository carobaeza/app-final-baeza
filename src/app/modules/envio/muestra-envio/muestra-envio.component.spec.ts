import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraEnvioComponent } from './muestra-envio.component';

describe('MuestraEnvioComponent', () => {
  let component: MuestraEnvioComponent;
  let fixture: ComponentFixture<MuestraEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
