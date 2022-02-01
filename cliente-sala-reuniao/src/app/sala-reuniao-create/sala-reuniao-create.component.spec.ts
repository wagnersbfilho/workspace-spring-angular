import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaReuniaoCreateComponent } from './sala-reuniao-create.component';

describe('SalaReuniaoCreateComponent', () => {
  let component: SalaReuniaoCreateComponent;
  let fixture: ComponentFixture<SalaReuniaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaReuniaoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaReuniaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
