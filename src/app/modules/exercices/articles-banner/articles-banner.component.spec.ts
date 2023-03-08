import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesBannerComponent } from './articles-banner.component';

describe('ArticlesBannerComponent', () => {
  let component: ArticlesBannerComponent;
  let fixture: ComponentFixture<ArticlesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
