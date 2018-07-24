import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, searchBox: any): any{
    if(!items) 
    return items;
    return items.filter(

      function(item){

        return item.title.toLowerCase().includes(searchBox.toLowerCase());

})
}
}
