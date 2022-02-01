import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaReuniaoUpdateComponent } from './sala-reuniao-update.component';

describe('SalaReuniaoUpdateComponent', () => {
  let component: SalaReuniaoUpdateComponent;
  let fixture: ComponentFixture<SalaReuniaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaReuniaoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaReuniaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
