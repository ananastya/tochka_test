import {Component} from '@angular/core';
import {TABS} from "./tabs.data";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'tab',
  template: `
      <a><ng-content></ng-content></a>
    `
})
export class Tab {
  constructor() {
  }

}

@Component({
  selector: 'tabs',
  template: `
    <h2>Травмпункты в выбранных районах</h2>
    <ul>
      <li *ngFor="let tab of showTabs"><tab (click)="setActiveTab(tab)">{{tab.name}}</tab></li>
    </ul>
    <div *ngIf="activeTab">
      
      <div>
        {{activeTab.description.address}}    
        {{activeTab.description.work}}    
      </div>
    </div>  

  `
})

export class Tabs {
  constructor(private route:ActivatedRoute) {
  }
  activeTab : Tab;
  showTabs: Tab[] = [];


  ngOnInit() {
    let tabs = TABS
    this.route.params.subscribe(params => {
      if (params['tab_list']) {
        console.log("params['tab_list']", params['tab_list'])
        console.log('tabs', tabs)
        let tabList = params['tab_list'].split(',')
        for (let item of tabList) {
          tabs[item].selected = true
          this.showTabs.push(tabs[item])
        }
      }
    });

  }
  setActiveTab(tab: Tab){
    this.activeTab = tab
  }
}




