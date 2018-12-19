import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/Service/project.service';
import { Task } from 'src/Models/task';
import { formatDate } from '@angular/common';
import { ActivatedRoute , Params, Router} from '@angular/router/';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Projects:any;
  Tasks:any;
  Users:any;
  TaskItem:any;
  isDisabled:Boolean;
  isValidEndDate:string;
  ParentTasks:any;
  tasknameSearch:string;
  TaskId:any;
  firstnameSearch:string;
  projectnameSearch:string;
  
  constructor(private service:ProjectService, private route:ActivatedRoute, private router:Router) {
       
    this.GetParentTasks();
    this.GetProjects();
    this.GetUsers();

    this.route.params.subscribe((params:Params) =>{
      this.TaskId = params['id']
      this.GetTaskById(this.TaskId)
    });
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

  UpdateTask()
  {
    
    if(this.isValidEndDate = "Valid")
    {
      
      this.service.UpdateTask(this.TaskItem)
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

  GetTaskById(taskId:Number)
  {
    this.service.GetTaskById(taskId)
    .subscribe(data => {
      this.TaskItem = data;
      this.isDisabled = this.TaskItem.IsParent;
    })
  }
}
