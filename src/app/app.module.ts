import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { appRoute } from './app.routing'
import { RouterModule, Routes  } from "@angular/router";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { ProjectService } from 'src/Service/project.service';
import { UserSearchPipe } from 'src/Filter/userfilter.pipe';
import { ProjectComponent } from './project/project.component';
import { ProjectSearchPipe } from 'src/Filter/projectfilter.pipe';
import { AddComponent } from './Task/add/add.component';
import { UpdateComponent } from './Task/update/update.component';
import { ViewComponent } from './Task/view/view.component';
import { TaskSearchPipe } from 'src/Filter/taskfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSearchPipe,
    ProjectSearchPipe,
    TaskSearchPipe,
    ProjectComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
