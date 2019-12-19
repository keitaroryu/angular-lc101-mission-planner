import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  maxItems: number = 3;
  experimentsSelected: string[] = [];

  constructor() { }

  ngOnInit() { }

  addItem(item: string){
    this.experimentsSelected.push(item);
  }

  removeItem(item: string){
    this.experimentsSelected.splice(this.experimentsSelected.indexOf(item),1);
  }

  disableAddCargoButton(item:object){
    if(this.experimentsSelected.length===this.maxItems){
      return true;
    }
  }

  clearExperiments(){
    this.experimentsSelected.splice(0,this.experimentsSelected.length);
  }

}
