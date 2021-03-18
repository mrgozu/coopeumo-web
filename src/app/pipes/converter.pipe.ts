import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {
    if(value && !isNaN(value)){

      if(unit === 'C'){
        var tempareature = (value - 32) / 1.8 ;
        return tempareature.toFixed(2);
      }
      if(unit === 'hPa'){
       var hpa = (value*33.8638 );
       return hpa.toFixed(2);
     }
      
}
return;
  }

}
