import { RouterModule, Routes  } from "@angular/router";
import { UserComponent } from "./user/user/user.component";
import { ProjectComponent } from "src/app/project/project.component";
import { AddComponent } from "src/app/Task/add/add.component";
import { UpdateComponent } from "src/app/Task/update/update.component";
import { ViewComponent } from "src/app/Task/view/view.component";


export const appRoute: Routes = [
 { path:'user', component:UserComponent },
 { path:'project', component:ProjectComponent},
 { path:'addtask', component:AddComponent},
 { path:'updatetask/:id', component:UpdateComponent},
 { path:'viewtask', component:ViewComponent}
]