import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFouondComponent } from './page-not-fouond.component';

describe('PageNotFouondComponent', () => {
  let component: PageNotFouondComponent;
  let fixture: ComponentFixture<PageNotFouondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFouondComponent]
    });
    fixture = TestBed.createComponent(PageNotFouondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
