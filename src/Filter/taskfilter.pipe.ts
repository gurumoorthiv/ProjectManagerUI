import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'taskSearch'
})

export class TaskSearchPipe implements PipeTransform{
    transform(items: any[], tasknameSearch:string){
        if(items && items.length &&  tasknameSearch)
        {
               
                return items.filter(item => {
                    
                    if(tasknameSearch && item.TaskName.toLowerCase().startsWith(tasknameSearch.toLowerCase())){
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