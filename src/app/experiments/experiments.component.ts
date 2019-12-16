import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = null;
  experiments: string[] = ['Mars soil sample','Plant growth in habitat','Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    this.experiments.push(experimentName);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(newExperiment: string, experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments[index] = newExperiment;
    this.experimentBeingEdited = null;
  }

}
