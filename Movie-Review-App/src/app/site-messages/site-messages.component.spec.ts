import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMessagesComponent } from './site-messages.component';

describe('SiteMessagesComponent', () => {
  let component: SiteMessagesComponent;
  let fixture: ComponentFixture<SiteMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
