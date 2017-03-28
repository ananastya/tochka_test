import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {TabList} from "./list.component";
import {Tabs, Tab} from "./tabs.component";
import {RouterModule}   from '@angular/router';
import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TabList
      },
      {
        path: 'info/:tab_list',
        component: Tabs
      }
    ])
  ],
  declarations: [AppComponent, Tabs, Tab, TabList],
  bootstrap: [AppComponent]
})
export class AppModule {
}
