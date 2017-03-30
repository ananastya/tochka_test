import {Component} from '@angular/core';
import {TABS} from "./tabs.data";
import {Tab} from "./tabs.component";
import {Router} from '@angular/router';

console.log('TABS', TABS)
@Component({
  selector: 'tab-list',
  template: `
    <h2>Выберите районы</h2>
    <form (ngSubmit)="openTabs()" class="checkbox-list">
      <div *ngFor="let tab of tabs; let i = index" >
        <tab class="checkbox-list__item">
          <input id="checkbox-{{i}}" name="{{tab.name}}" [(ngModel)]="tab.selected" type="checkbox" value="{{ tab.name }}"/><label for="checkbox-{{i}}">{{tab.name}}</label>
        </tab>
      </div>
      <div class="checkbox-list__submit"><input type="submit" value="Найти"></div>
    </form>
  `
})

export class TabList {
  constructor(private router: Router){
  }
  tabs = TABS
  openTabs(){
    let activeTabsIndex:number[] = []
    this.tabs.forEach(function(item,index){
      if(item.selected){
        activeTabsIndex.push(index)
      }
    })
    this.router.navigate(['/info',activeTabsIndex.join(',')])
  }
}


