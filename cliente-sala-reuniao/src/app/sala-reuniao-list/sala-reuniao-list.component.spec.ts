import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaReuniaoListComponent } from './sala-reuniao-list.component';

describe('SalaReuniaoListComponent', () => {
  let component: SalaReuniaoListComponent;
  let fixture: ComponentFixture<SalaReuniaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaReuniaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaReuniaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
