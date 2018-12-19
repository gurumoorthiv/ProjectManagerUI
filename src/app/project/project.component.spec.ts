import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from  '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'
import { TaskSearchPipe } from 'src/Filter/taskfilter.pipe';
import { UserSearchPipe } from 'src/Filter/userfilter.pipe';
import { ProjectSearchPipe } from 'src/Filter/projectfilter.pipe';
import { HttpModule } from '@angular/http';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ,
        TaskSearchPipe,
        UserSearchPipe,
        ProjectSearchPipe],
        imports: [
          RouterTestingModule,
          HttpModule,
          HttpClientModule,
          FormsModule
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
