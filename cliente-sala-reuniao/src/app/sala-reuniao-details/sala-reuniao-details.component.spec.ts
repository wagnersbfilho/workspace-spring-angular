import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaReuniaoDetailsComponent } from './sala-reuniao-details.component';

describe('SalaReuniaoDetailsComponent', () => {
  let component: SalaReuniaoDetailsComponent;
  let fixture: ComponentFixture<SalaReuniaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaReuniaoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaReuniaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
