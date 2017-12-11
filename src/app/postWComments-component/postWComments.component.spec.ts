import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWCommentsComponent } from './postWComments.component';

describe('PostWCommentsComponent', () => {
  let component: PostWCommentsComponent;
  let fixture: ComponentFixture<PostWCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
