import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {name: 'filterLevel'}
)
export class filterLevelPipe implements PipeTransform {
  transform(data: any[], level?: number) {
    if(!data || data.length === 0) {
      return [];
    }
    if(level){
      return data.filter(item => item.level === level );
    } else {
      return data.filter(item => item.level === 1 );
    }
  }
}
