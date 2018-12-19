import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'projectSearch'
})

export class ProjectSearchPipe implements PipeTransform{
    transform(items: any[], projectnameSearch:string){
        if(items && items.length &&  projectnameSearch)
        {
               
                return items.filter(item => {
                    
                    if(projectnameSearch && item.Project_Name.toLowerCase().startsWith(projectnameSearch.toLowerCase())){
                        return true;
                    }
                    return false;
                })
        }
        else
        {
            return items;
        }
    }
}