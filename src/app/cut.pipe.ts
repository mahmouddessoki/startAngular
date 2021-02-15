import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(desc:string,n:number): string {
    return desc.substr(0,n);
  }

}
