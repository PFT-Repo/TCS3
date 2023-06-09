import { Injectable } from '@angular/core';
import { Data } from '../dataJson';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  private infos: Data [] = [

    {
      "titulo": "Terremoto de magnitud 7,4 sacude a México",
      "fecha": "2022-03-25",
      "descripcion": "Un fuerte terremoto sacudió el estado mexicano de Guerrero el viernes 25 de marzo, causando daños en edificios y dejando al menos 3 personas muertas y decenas de heridos.",
      "ubicacion": "Guerrero, México"
  },
  {
      "titulo": "Estados Unidos y Rusia llevan a cabo conversaciones sobre Ucrania",
      "fecha": "2022-03-26",
      "descripcion": "El secretario de Estado estadounidense, Antony Blinken, y el ministro de Relaciones Exteriores ruso, Sergei Lavrov, se reunieron en Ginebra para discutir la crisis en Ucrania.",
      "ubicacion": "Ginebra, Suiza"
  },
  {
      "titulo": "La OMS aprueba la vacuna Pfizer-BioNTech para niños",
      "fecha": "2022-03-25",
      "descripcion": "La Organización Mundial de la Salud (OMS) aprobó la vacuna Pfizer-BioNTech COVID-19 para su uso en niños de 5 a 11 años.",
      "pais": "Ginebra, Suiza"
  },
  {
      "titulo": "Incendio en la histórica Catedral de San Pablo de Londres",
      "fecha": "2022-03-24",
      "descripcion": "Un incendio destruyó gran parte de la histórica Catedral de San Pablo de Londres el jueves 24 de marzo. Aunque no hubo víctimas, se informó de daños importantes en la estructura de la catedral.",
      "pais": "Londres, Reino Unido"
  },
  {
      "titulo": "El FBI frustra un complot de extrema derecha para secuestrar y matar al gobernador de Michigan",
      "fecha": "2022-03-22",
      "descripcion": "El FBI anunció que había frustrado un complot de extrema derecha para secuestrar y matar a la gobernadora de Michigan, Gretchen Whitmer.",
      "pais": "Estados Unidos"
  },
  {
      "titulo": "El presidente de Turquía, Recep Tayyip Erdogan, anuncia su intención de retirarse del poder",
      "fecha": "2022-03-22",
      "descripcion": "El presidente de Turquía, Recep Tayyip Erdogan, anunció que no buscaría la reelección en las próximas elecciones presidenciales y que se retiraría del poder al final de su mandato actual en 2023.",
      "pais": "Turquía"
  },
  {
      "titulo": "Un avión se estrella en Pakistán, matando a todas las personas a bordo",
      "fecha": "2022-03-20",
      "descripcion": " Un avión de pasajeros se estrelló en la ciudad de Karachi,Pakistán,el domingo 20 de marzo, matando a las 97 personas a bordo.Se investiga la causa del accidente. ",
      "pais": "Pakistán"
  },
  {
      "titulo": "Los Emiratos Árabes Unidos lanzan una misión espacial a Venus",
      "fecha": "2022-03-20",
      "descripcion": "Los Emiratos Árabes Unidos lanzaron una sonda espacial a Venus el domingo 20 de marzo, convirtiéndose en el primer país árabe en lanzar una misión al planeta.",
      "pais": "Emiratos Árabes Unidos"
  },
  {
      "titulo": "Nuevas sanciones de la Unión Europea contra Rusia",
      "fecha": "2022-03-18",
      "descripcion": "La Unión Europea impuso nuevas sanciones contra Rusia el viernes 18 de marzo en respuesta a la escalada de tensiones en Ucrania.",
      "pais": "Unión Europea"
  },
  {
      "titulo": "Se confirma la muerte del fundador de IKEA, Ingvar Kamprad",
      "fecha": "2022-03-17",
      "descripcion": "Ingvar Kamprad, fundador de la cadena sueca de muebles IKEA, falleció el jueves 17 de marzo a los 95 años.",
      "pais": "Suecia"
  }
]


getinfos() : Data[]{
  return this.infos;
}


}
