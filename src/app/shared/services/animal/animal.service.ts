import { Injectable } from '@angular/core';
import { animal } from '../../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  animals : animal[] = [
    {
      id : 1,
      name : 'Poupoune',
      birthdate : new Date("08/16/2015"),
      race : 'Chat',
      coat : 'Bleu marine',
      owner : 'Gislaine'
    },
    {
      id : 2,
      name : 'Pouloup',
      birthdate : new Date("08/16/2015"),
      race : 'Chien',
      coat : 'Noir',
      owner : 'Nicolas'
    },
    {
      id : 3,
      name : 'Henrico',
      birthdate : new Date("01/03/2020"),
      race : 'Herisson',
      coat : 'Bleu marine',
      owner : 'Gislaine'
    },
    {
      id : 4,
      name : 'Kekster',
      birthdate : new Date("08/16/2016"),
      race : 'Humain',
      coat : 'Bleu marine',
      owner : 'Daniyal'
    },
    {
      id : 5,
      name : 'Charlotte',
      birthdate : new Date("01/04/1993"),
      race : 'Femme',
      coat : 'White',
      owner : 'Simon'
    }
  ]
}
