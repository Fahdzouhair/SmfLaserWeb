import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyChefEquipeComponent } from './modify-chef-equipe.component';

describe('ModifyChefEquipeComponent', () => {
  let component: ModifyChefEquipeComponent;
  let fixture: ComponentFixture<ModifyChefEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyChefEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyChefEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
