import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/Models/user';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from 'src/Models/project';
import { Task } from 'src/Models/task';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url:string;
  constructor(private http:HttpClient) {
    this.url = "http://localhost/ProjectManager.API";
   }

  GetUsers()
  {
    return this.http.get(this.url + '/GetUsers')
  }

  AddUser(user:User) : Observable<any>
  {
      var body = JSON.stringify(user);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.post(this.url + '/AddUser',user,httpOptions);
  }

  UpdateUser(user:User) : Observable<any>
  {
      var body = JSON.stringify(user);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put(this.url + '/UpdateUser',user,httpOptions);
  }

  GetUserById(userId:Number)
  {
    return this.http.get(this.url + '/GetUserById?id=' + userId);
  }

  DeleteUser(userId:Number) : Observable<any>
  {
    var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.delete(this.url + '/DeleteUser?id=' + userId,httpOptions);
  }

  GetProjects()
  {
    return this.http.get(this.url + '/GetProjects')
  }

  AddProject(project:Project) : Observable<any>
  {
      var body = JSON.stringify(project);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.post(this.url + '/AddProject',project,httpOptions);
  }

  UpdateProject(project:Project) : Observable<any>
  {
      var body = JSON.stringify(project);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put(this.url + '/UpdateProject',project,httpOptions);
  }

  GetProjectById(projectId:Number)
  {
    return this.http.get(this.url + '/GetProjectById?id=' + projectId);
  }

  DeleteProject(projectId:Number) : Observable<any>
  {
    var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.delete(this.url + '/DeleteProject?id=' + projectId,httpOptions);
  }

  GetTasks()
  {
    return this.http.get(this.url + '/GetAllTasks')
  }

  GetParentTasks()
  {
    return this.http.get(this.url + '/GetParentTasks')
  }

  GetTaskById(taskId:Number)
  {
    return this.http.get(this.url + '/GetTaskById?taskId=' + taskId);
  }

  GetTasksByProjectId(projectId:Number)
  {
    return this.http.get(this.url + '/GetTaskByProjectId?projectId=' + projectId);
  }

  AddTask(task:Task) : Observable<any>
  {
      var body = JSON.stringify(task);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.post(this.url + '/AddTask',task,httpOptions);
  }

  UpdateTask(task:Task) : Observable<any>
  {
      var body = JSON.stringify(task);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put(this.url + '/UpdateTask',task,httpOptions);
  }

  DeleteTask(taskId:Number) : Observable<any>
  {
    var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.delete(this.url + '/EndTask?taskId=' + taskId,httpOptions);
  }
}
