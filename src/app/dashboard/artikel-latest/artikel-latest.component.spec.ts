import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelLatestComponent } from './artikel-latest.component';

describe('ArtikelLatestComponent', () => {
  let component: ArtikelLatestComponent;
  let fixture: ComponentFixture<ArtikelLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikelLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
