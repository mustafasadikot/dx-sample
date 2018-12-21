import { Component, OnInit } from '@angular/core';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-material-flow',
  templateUrl: './material-flow.component.html',
  styleUrls: ['./material-flow.component.css']
})
export class MaterialFlowComponent implements OnInit {

  private filterDataSource = [];
  
  // Turn enum into array
  ToArray(enumme) {
      return Object.keys(enumme)
          .filter(StringIsNumber)
          .map(key => enumme[key]);
  }
  private components = [
    { ComponentId: 1, Name: "A", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 2, Name: "A", FixtureId: 1, Design: status.Done, Manufacturing: status.Done, QA: status.Done, Assembly: status.InProgress },
    { ComponentId: 3, Name: "A", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Rejected, Assembly: status.Pending },
    { ComponentId: 4, Name: "A", FixtureId: 1, Design: status.InProgress, Manufacturing: status.Rejected, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 5, Name: "A", FixtureId: 1, Design: status.NotApplicable, Manufacturing: status.NotApplicable, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 6, Name: "A", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 7, Name: "A", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 8, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 9, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 10, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 11, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 12, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 13, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 14, Name: "A", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },

  ]
  private sourceComponents: Array<any>;
  private fixture: Fixture = new Fixture();
  private fixtures: Array<Fixture> = [
    { Id: 0, Name: 'All' },
    { Id: 1, Name: 'F1' },
    { Id: 2, Name: 'F2' },
  ] 
  constructor() { 
      
  }
  
  changed = ( event ) => {
    if(event.selectedItem){
      if(event.selectedItem.Id == 0){
        this.sourceComponents = this.components;
      }
      else{
        this.sourceComponents = this.components.filter(p => p.FixtureId == event.selectedItem.Id);
      }      
    }    
  }

  ngOnInit() {
    this.filterDataSource = Object.keys(status)
                                    .filter(StringIsNumber)
                                    .map(key => ({ value: key, text: status[key] }))
    this.sourceComponents = this.components;

  }

}

enum status {
  Pending,
  Done,
  Rejected,
  InProgress,
  NotApplicable
}

class Fixture {
    Id: number
    Name: string
}

const StringIsNumber = value => isNaN(Number(value)) === false;