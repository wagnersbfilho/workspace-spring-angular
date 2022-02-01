import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSalaReuniaoComponent } from './cliente-sala-reuniao.component';

describe('ClienteSalaReuniaoComponent', () => {
  let component: ClienteSalaReuniaoComponent;
  let fixture: ComponentFixture<ClienteSalaReuniaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSalaReuniaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSalaReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
