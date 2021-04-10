import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuserInfoComponent } from './githubuser-info.component';

describe('GithubuserInfoComponent', () => {
  let component: GithubuserInfoComponent;
  let fixture: ComponentFixture<GithubuserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubuserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
