import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from  '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'
import { TaskSearchPipe } from 'src/Filter/taskfilter.pipe';
import { UserSearchPipe } from 'src/Filter/userfilter.pipe';
import { ProjectSearchPipe } from 'src/Filter/projectfilter.pipe';
import { HttpModule } from '@angular/http';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ,
      UserSearchPipe],
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
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
