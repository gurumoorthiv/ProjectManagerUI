import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/Service/project.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Projects:any;
  Tasks:any;
  ProjectId:Number;
  projectnameSearch:string;

  constructor(private service:ProjectService) {
    this.GetProjects();
   }

  ngOnInit() {
  }
  GetProjects()
  {
    this.service.GetProjects()
                        .subscribe(data => {
                        this.Projects = data
                      ,err => console.log(err)
                  })
  }


  GetTasksByProjectId(id:Number)
  {
    this.service.GetTasksByProjectId(id)
                        .subscribe(data => {
                          console.log(data)
                        this.Tasks = data
                      ,err => console.log(err)
                  })
  }

  SelectProject(id:Number)
  {
      this.ProjectId = id;
      this.GetTasksByProjectId(id);
  }

  EndTask(taskId:Number)
  {
    this.service.DeleteTask(taskId)
    .subscribe(_ =>this.GetTasksByProjectId(this.ProjectId),err => console.log(err));
  }

  DisableButton(endTask:string)
  {
    if(endTask == 'Y')
    {
      return true;
    }
    return false;
  }

  SortByStartDate()
  {
    
    this.Tasks.sort((a,b) => a.StartDate.localeCompare(b.StartDate));
  }

  SortByEndDate()
  {
    
    this.Tasks.sort((a,b) => a.EndDate.localeCompare(b.EndDate));
  }

  SortByPriority()
  {
    
    this.Tasks.sort((a,b) => a.Priority - b.Priority);
  }
  SortByCompleted()
  {
    
    this.Tasks.sort((a,b) => {
      if(a.EndTask == null && b.EndTask != null)
      {
          return -1;
      }
      return 1;
    });
  }
}
