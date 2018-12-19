import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/Service/project.service';
import { Task } from 'src/Models/task';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Projects:any;
  Tasks:any;
  Users:any;
  TaskItem:Task;
  isDisabled:Boolean;
  isValidEndDate:string;
  ParentTasks:any;
  tasknameSearch:string;
  firstnameSearch:string;
  projectnameSearch:string;

  constructor(private service:ProjectService) {
    this.TaskItem = new Task();
    this.TaskItem.IsParent = false;
    this.isDisabled = false;
    this.SetDate();
  this.GetParentTasks();
    this.GetProjects();
    this.GetUsers();
   }

  ngOnInit() {
  }

  ValidateStartEndDate()
  {
      var startDate = new Date(this.TaskItem.StartDate);
      var endDate = new Date(this.TaskItem.EndDate);
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

  Reset()
  {
    this.TaskItem = new Task(); 
    this.SetDate();
  }

  SelectUser(id:Number)
  {
    this.TaskItem.UserId = id;
  }

  OnSelect(event)
  {
    if(event.target.checked)
    {
      this.isDisabled = true;
      
    }
    else
    {
      this.isDisabled = false;
    }
  }

  SelectProject(id:Number)
  {
      this.TaskItem.ProjectId = id;
  }

  SelectParentTask(id:Number)
  {
    this.TaskItem.ParentId = id;
  }

  SetDate()
  {
    var date = new Date();
      var nextDate = new Date();
      nextDate.setDate(date.getDate() + 1);
      this.TaskItem.StartDate = formatDate(date,"yyyy-MM-dd","en")
      this.TaskItem.EndDate = formatDate(nextDate,"yyyy-MM-dd","en")
  }

  AddTask()
  {
    
    if(this.isValidEndDate = "Valid")
    {
      console.log(1)
      this.service.AddTask(this.TaskItem)
      .subscribe(_ => {
        this.Reset(), err => console.log(err)
      });
    }
  }

  GetProjects()
  {
    this.service.GetProjects()
                        .subscribe(data => {
                        this.Projects = data
                        
                      ,err => console.log(err)
                  })
  }

  GetUsers()
  {
    this.service.GetUsers()
                        .subscribe(data => {
                        this.Users = data
                      ,err => console.log(err)
                  })
  }

  GetParentTasks()
  {
    this.service.GetParentTasks()
                        .subscribe(data => {
                        this.ParentTasks = data
                        
                      ,err => console.log(err)
                  })
  }
}
