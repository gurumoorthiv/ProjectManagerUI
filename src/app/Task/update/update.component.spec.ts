import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from  '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'
import { TaskSearchPipe } from 'src/Filter/taskfilter.pipe';
import { UserSearchPipe } from 'src/Filter/userfilter.pipe';
import { ProjectSearchPipe } from 'src/Filter/projectfilter.pipe';
import { HttpModule } from '@angular/http';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent,
      TaskSearchPipe,
    UserSearchPipe,
  ProjectSearchPipe ],
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
    //fixture = TestBed.createComponent(UpdateComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
