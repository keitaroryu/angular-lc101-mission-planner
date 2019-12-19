import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
      {name: 'Duct Tape', mass: 0.5},
      {name: 'Space Camera', mass: 20},
      {name: 'Food', mass: 150},
      {name: 'Oxygen Tanks', mass: 400},
      {name: 'AE-35 Unit', mass: 5},
      {name: 'ISS Supplies', mass: 800},
      {name: 'Water', mass: 250},
      {name: 'Satellite', mass: 1200},
      {name: 'R2 Unit', mass: 32}
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;
  addCargoColor: string = 'gold';
  remainingMass: number = this.maximumAllowedMass;

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:
  addItem(item: object){
    this.cargoHold.push(item);
    this.cargoMass += item['mass'];
    this.remainingMass -= item['mass'];
  }

  removeItem(item: object){
    this.cargoHold.splice(this.cargoHold.indexOf(item),1);
    this.cargoMass -= item['mass'];
    this.remainingMass += item['mass'];
  }

  disableAddCargoButton(item:object){
    if(this.cargoHold.length===this.maxItems || (this.cargoMass + item['mass'])>this.maximumAllowedMass || this.cargoHold.includes(item)){
      return true;
    }
  }

  emptyHold(){
    this.cargoHold.splice(0,this.cargoHold.length);
    this.cargoMass = 0;
    this.remainingMass = this.maximumAllowedMass;
  }
}
