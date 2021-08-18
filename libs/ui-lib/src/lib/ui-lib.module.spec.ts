import { TestBed } from '@angular/core/testing';
import { UiLibModule } from './ui-lib.module';

describe('UiLibModule', () => {
  beforeEach( (() => {
    TestBed.configureTestingModule({
      imports: [UiLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiLibModule).toBeDefined();
  });
});
