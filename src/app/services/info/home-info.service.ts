import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeInfoService {

  info = [
    {
      titulo: 'DESCRIPCIÓN',
      contenido: 'El proyecto “Planta Procesadora Inteligente de Hortalizas y Frutas de productores pertenecientes al modelo cooperativo de Coopeumo” fue desarrollado en el marco del proyecto Fondo de Innovación para la Competitividad (FIC) por la Universidad Tecnológica Metropolitana (UTEM) en conjunto con la Cooperativa Campesina Intercomunal Peumo (Coopeumo), ubicada en la Región del Libertador Gral. Bernardo O’Higgins.'
    },
    {
      titulo:'OBJETIVO',
      contenido:'El objetivo del proyecto fue implementar una planta procesadora de productos agroindustriales basados en frutas y hortalizas de productores pertenecientes a Coopeumo, que sea capaz de optimizar el uso de sus recursos energéticos, utilizando Energías Renovables No Convencionales y que a la vez no genere residuos industriales innecesarios y administre de manera eficiente e inteligente sus procesos de producción, gestión y articulación de la innovación con los actores involucrados, todo esto bajo el concepto “Smart Factory” en Agroindustria.'
    },
    {
      titulo: 'PROGRAMAS UTEM',
      contenido: 'La UTEM es parte del proyecto a través de la Dirección de Transferencia Tecnológica de la Vicerrectoría de Transferencia Tecnológica y Extensión, el Programa de Institucional de Innovación, Innova UTEM; Programa de Prospectiva e Innovación Tecnológica, ProteinLab; Programa de Ingeniería Concurrente y Programa Tecnológico del Envase, Proten y el Programa de Energías Renovables y No Convencionales (ERNC) para el Desarrollo Sustentable, estos últimos de la Facultad de Ingeniería.'
    }
  ]
  


  constructor() { }
}
