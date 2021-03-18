import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
@Injectable({
  providedIn: 'root'
})
export class BackApiService {

  constructor() { }


  async getData():Promise<any> { 
    let apiName = 'backendcoopeumo';
    let path = '/em';
    let myInit = { // OPTIONAL
      headers: {cantidad:1}, // OPTIONAL
    };
    return await API.get(apiName, path, myInit)
            .then((data)=>data[0])
            .then((data)=>{

              return (
              {
                temperatura:data.outTemp,
                fechaHora: data.date,
                fecha: data.date2,
                epoch: data.dateTime,
                sensacionTermica: data.heatindex,
                indiceUv: data.UV,
                presionAtmosferica: data.pressure,
                lluvia: data.rain,
                humedad: data.outHumidity,
                

              })
            });

  }
  
  
 

}

 