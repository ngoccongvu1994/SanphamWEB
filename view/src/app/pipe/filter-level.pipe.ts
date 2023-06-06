import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {name: 'filterLevel'}
)
export class filterLevelPipe implements PipeTransform {
  transform(data: any[], level?: number, isParent? : boolean) {
    console.log('data', data, isParent)
    if(!data || data.length === 0) {
      return [];
    }
    if(level === 0){
      const result = data.filter(item => item.is_parent == isParent );
      console.log('lst children', result)
      return result
    } else {
      return data.filter(item => item.level == level );
    }
  }
}
