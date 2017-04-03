import {Component} from '@angular/core';
import {TABS} from "./tabs.data";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'tab',
  template: `
      <ng-content></ng-content>
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
    <ul class="tab-list">
      <li [ngClass]="{'active' : activeTab == tab}" class="tab-list__item" *ngFor="let tab of showTabs"><tab (click)="setActiveTab(tab)">{{tab.name}}</tab></li>
    </ul>
    <div class="tab-list-content" *ngIf="activeTab">
      
      <div>
        Адрес: {{activeTab.description.address}}<br>    
        Время работы: {{activeTab.description.work}}    
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
        this.activeTab = this.showTabs[0]
      }
    });

  }
  setActiveTab(tab: Tab){
    this.activeTab = tab
  }
}




