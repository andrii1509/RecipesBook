import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionsPageComponent } from './versions-page.component';

describe('VersionsPageComponent', () => {
  let component: VersionsPageComponent;
  let fixture: ComponentFixture<VersionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
