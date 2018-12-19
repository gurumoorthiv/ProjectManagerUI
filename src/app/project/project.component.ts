import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/project';
import { formatDate } from '@angular/common';
import { ProjectService } from 'src/Service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectnameSearch: string;
  ProjectItem:any;
  Projects:any;
  AddOrUpdate:string;
  isDisabled:boolean;
  isValidEndDate:string;
  Users:any;
  firstnameSearch:string;

  constructor(private service:ProjectService) { 
    this.ProjectItem = new Project();
    this.AddOrUpdate = "Add";
    this.isValidEndDate = "Valid";
    this.service.GetUsers()
                  .subscribe(data => {
                    this.Users = data
                    console.log(this.Users) ,err => console.log(err)
                  });
    this.GetProjects();
  }

  ngOnInit() {
  }

  OnSelect(event)
  {
    if(event.target.checked)
    {
      this.isDisabled = false;
      var date = new Date();
      var nextDate = new Date();
      nextDate.setDate(date.getDate() + 1);
      this.ProjectItem.Start_Date = formatDate(date,"yyyy-MM-dd","en")
      this.ProjectItem.End_Date = formatDate(nextDate,"yyyy-MM-dd","en")
    }
    else
    {
      this.isDisabled = true;
    }
  }

  ValidateStartEndDate()
  {
      var startDate = new Date(this.ProjectItem.Start_Date);
      var endDate = new Date(this.ProjectItem.End_Date);
      if(startDate < endDate)
      {
        this.isValidEndDate = "Valid";
      }
      else
      {        
        this.isValidEndDate = "Invalid";
      }
  }

  ValidateDate()
  {
    if(this.isValidEndDate == "Invalid")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  SelectManager(id:Number)
  {
    this.ProjectItem.UserId = id;
  }

  GetProjects()
  {
    this.service.GetProjects()
                        .subscribe(data => {
                        this.Projects = data
                        this.ProjectItem = new Project()
                      ,err => console.log(err)
                  })
  }
  AddOrUpdateProject()
  {
    if(this.AddOrUpdate == "Add")
    {
    this.service.AddProject(this.ProjectItem)
                .subscribe(_ => {
                  this.GetProjects()
                ,err => console.log(err)});
      }
      else{
        this.service.UpdateProject(this.ProjectItem)
                .subscribe(_ => {
                      this.GetProjects()
                      this.AddOrUpdate = "Add"
                ,err => console.log(err)});
      }
  }

  UpdateProject(ProjectId:Number)
  {
    this.AddOrUpdate = "Update";
    this.service.GetProjectById(ProjectId)
                .subscribe(data => {
                        console.log(data)
                        this.ProjectItem = data
                        this.AddOrUpdate = "Update"
                      ,err => console.log(err)
                  });
  }

  DeleteProject(projectId:Number)
  {
    
    this.service.DeleteProject(projectId)
                .subscribe(_ => {
                  this.GetProjects()
                  this.AddOrUpdate = "Add"
                ,err => console.log(err)});
  }

  Reset()
  {
    this.ProjectItem = new Project();
    this.AddOrUpdate = "Add";
  }

  SortByStartDate()
  {
    
    this.Projects.sort((a,b) => a.Start_Date.localeCompare(b.Start_Date));
  }

  SortByEndDate()
  {
    
    this.Projects.sort((a,b) => a.End_Date.localeCompare(b.End_Date));
  }

  SortByPriority()
  {
    
    this.Projects.sort((a,b) => a.Priority - b.Priority);
  }
  SortByCompleted()
  {
    
    this.Projects.sort((a,b) => a.Completed_Tasks - b.Completed_Tasks);
  }
}
