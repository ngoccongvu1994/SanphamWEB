import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {name: 'filterLevel'}
)
export class filterLevelPipe implements PipeTransform {
  transform(data: any[]) {
    if(!data || data.length === 0) {
      return [];
    }
    return data.filter(item => item.level === 1);
  }
}
