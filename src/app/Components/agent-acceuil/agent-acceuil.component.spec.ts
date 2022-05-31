import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAcceuilComponent } from './agent-acceuil.component';

describe('AgentAcceuilComponent', () => {
  let component: AgentAcceuilComponent;
  let fixture: ComponentFixture<AgentAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
