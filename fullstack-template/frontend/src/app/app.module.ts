import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SidebarMenuComponent } from './pages/TV/sidebar-menu/sidebar-menu.component';
import { AugTableVOTEtopmenuComponent } from './pages/AugmTable/aug-table-votetopmenu/aug-table-votetopmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    AugTableVOTEtopmenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
