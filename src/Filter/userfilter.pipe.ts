import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'userSearch'
})

export class UserSearchPipe implements PipeTransform{
    transform(items: any[], firstnameSearch:string){
        if(items && items.length &&  firstnameSearch)
        {
               
                return items.filter(item => {
                    
                    if(firstnameSearch && item.First_Name.toLowerCase().startsWith(firstnameSearch.toLowerCase())){
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