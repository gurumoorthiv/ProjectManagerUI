import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/user';
import { ProjectService } from 'src/Service/project.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  firstnameSearch: string;
  UserItem:any;
  Users:any;
  AddOrUpdate:string;
  array:any[];

  constructor(private service:ProjectService) {
    this.UserItem = new User;
    this.AddOrUpdate = "Add";
    this.service.GetUsers()
                  .subscribe(data => {
                    this.Users = data
                    console.log(this.Users) ,err => console.log(err)
                  });
   }

  ngOnInit() {
  }
   
  AddOrUpdateUser()
  {
    if(this.AddOrUpdate == "Add")
    {
    this.service.AddUser(this.UserItem)
                .subscribe(_ => {
                  this.service.GetUsers()
                        .subscribe(data => {
                        this.Users = data
                        this.UserItem = new User()
                      ,err => console.log(err)
                  })
                ,err => console.log(err)});
      }
      else{
        this.service.UpdateUser(this.UserItem)
                .subscribe(_ => {
                  this.service.GetUsers()
                        .subscribe(data => {
                        this.Users = data
                        this.UserItem = new User()
                        this.AddOrUpdate = "Add"
                      ,err => console.log(err)
                  })
                ,err => console.log(err)});
      }
  }

  UpdateUser(userId:Number)
  {
    this.AddOrUpdate = "Update";
    this.service.GetUserById(userId)
                .subscribe(data => {
                        console.log(data)
                        this.UserItem = data
                        this.AddOrUpdate = "Update"
                      ,err => console.log(err)
                  });
  }

  DeleteUser(userId:Number)
  {
    
    this.service.DeleteUser(userId)
                .subscribe(_ => {
                  this.service.GetUsers()
                        .subscribe(data => {
                        this.Users = data
                        this.UserItem = new User()
                        this.AddOrUpdate = "Add"
                      ,err => console.log(err)
                  })
                ,err => console.log(err)});
  }

  Reset()
  {
    this.UserItem = new User();
    this.AddOrUpdate = "Add";
  }

  SortByFirstName()
  {
    this.array = this.Users;
    this.array.sort((a,b) => a.First_Name.localeCompare(b.First_Name));
  }

  SortByLastName()
  {
    this.array = this.Users;
    this.array.sort((a,b) => a.Last_Name.localeCompare(b.Last_Name));
  }

  SortById()
  {
    this.array = this.Users;
    this.array.sort((a,b) => a.Employee_Id.localeCompare(b.Employee_Id));
  }
}
