import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { DataEmModel } from 'src/app/models/dataEm.model';
@Injectable({
  providedIn: 'root'
})
export class BackApiService {

  constructor() { }


  async getData():Promise<DataEmModel> { 
    let apiName = 'backendcoopeumo';
    let path = '/em';
    let myInit = { // OPTIONAL
      headers: {cantidad:1}, // OPTIONAL
    };
    return await API.get(apiName, path, myInit)
            .then((data)=>data[0])
            .then((data)=>{
              // console.log(data);
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

  async getAllData():Promise<DataEmModel[]> { 
    let apiName = 'backendcoopeumo';
    let path = '/em/1';
    let myInit = { // OPTIONAL
       // OPTIONAL
    };
    let respuesta:DataEmModel[] = [];

    return await API.get(apiName, path, myInit)
            .then((datos)=>{
              console.log(datos[0].dateGrafic);
              datos.forEach((data) => respuesta.push({ 
                temperatura:data.outTemp,
                fechaHora: data.date,
                fecha: data.dateGrafic,
                epoch: data.dateTime,
                sensacionTermica: data.heatindex,
                indiceUv: data.UV,
                presionAtmosferica: data.pressure,
                lluvia: data.rain,
                humedad: data.outHumidity,
               }));
               console.log(respuesta);
               return respuesta;
            })
  }
  
  
 

}

 