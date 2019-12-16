import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  duplicateName(newName: string) {
    let duplicateName = false;
    for (let i=0; i<this.crew.length; i++) {
      if (this.crew[i]['name']===newName) {
        duplicateName = true;
      }
    }
    return duplicateName;
  }

  add(memberName: string, isFirst: boolean) {
    let errorMsg = '';
    
    if (!this.duplicateName(memberName)){
      this.crew.push({name: memberName, firstMission: isFirst});
    }else {
      errorMsg = "Crew member already listed. Enter a different Crew member.";
    }

    return errorMsg;
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    let errorMsg = '';

    if (!this.duplicateName(name) || member['name'] === name){
      member['name'] = name;
      this.memberBeingEdited = null;
    }else {
      errorMsg = "Crew member already listed. Enter a different Crew member.";
    }

    return errorMsg;
  }

}
