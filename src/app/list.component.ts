import {Component} from '@angular/core';
import {TABS} from "./tabs.data";
import {Tab} from "./tabs.component";
import {Router} from '@angular/router';

console.log('TABS', TABS)
@Component({
  selector: 'tab-list',
  template: `
    <h1>Выберите дни недели</h1>
    <form (ngSubmit)="openTabs()">
      <div *ngFor="let tab of tabs">
        <tab>
          <input name="{{tab.name}}" [(ngModel)]="tab.selected" type="checkbox" value="{{ tab.name }}"/><label>{{tab.name}}</label>
        </tab>
      </div>
      <div><input type="submit" value="Подробнее"></div>
    </form>
  `
})

export class TabList {
  constructor(private router: Router){
  }
  tabs = TABS
  openTabs(){
    let activeTabs:number[] = []
    this.tabs.forEach(function(item,index){
      if(item.selected){
        activeTabs.push(index)
      }
    })
    console.log(activeTabs)

    this.router.navigate(['/info',activeTabs.join(',')])
  }
}


