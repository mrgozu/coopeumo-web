import { Component,  ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { DataEmModel } from '../../../../models/dataEm.model';
import { BackApiService } from '../../../../services/data/back-api.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styles: [
  ]
})
export class GraphComponent   {

  dateStart;
  dateEnd;
  estacionMetereologica: DataEmModel[];
  constructor(private api:BackApiService) { }

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Temperatura' },
    { data: [], label: 'Humedad' },
    
  ];
  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  setValue(){
    this.api.getAllData()
    .then((data)=>{
      // this.estacionMetereologica=data
      let temperatura: number[] = [];
      let humedad: number[] =[];
      let fecha: string [] = [];

      
          data.map( data => {
        if ( data.fecha >= this.dateStart &&  this.dateEnd >= data.fecha && data.temperatura!=null  ){
          //convierte a celcius
          console.log(data.temperatura);
          temperatura.push(Math.round(((data.temperatura-32)*(5/9))));
          humedad.push(data.humedad);
          fecha.push(data.fechaHora);
        }
        
      });
      this.lineChartData[0].data = temperatura;
      this.lineChartData[1].data = humedad;
      this.lineChartLabels = fecha;


    }).catch( (err) => err );
  }

}
