import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChefEquipeComponent } from './delete-chef-equipe.component';

describe('DeleteChefEquipeComponent', () => {
  let component: DeleteChefEquipeComponent;
  let fixture: ComponentFixture<DeleteChefEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteChefEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteChefEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
