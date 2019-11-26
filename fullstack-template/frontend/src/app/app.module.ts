import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SidebarMenuComponent } from './pages/TV/sidebar-menu/sidebar-menu.component';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { VotestatsComponent } from './pages/AugmTable/votestats/votestats.component';
import { Votestep1Component } from './pages/AugmTable/votestep1/votestep1.component';
import { Votestep2Component } from './pages/AugmTable/votestep2/votestep2.component';
import { LiveinfosComponent } from './pages/AugmTable/liveinfos/liveinfos.component';

import { LiveMatchComponent } from './pages/TV/live-match/live-match.component';


import { SubstitutePlayerComponent } from './pages/AugmTable/liveinfos/substitute-player/substitute-player.component';
import { StartingPlayerComponent } from './pages/AugmTable/liveinfos/starting-player/starting-player.component';
import { SubstitutePlayerBottomComponent } from './pages/AugmTable/liveinfos/substitute-player-bottom/substitute-player-bottom.component';
import { WatchlistTvComponent } from './pages/TV/watchlist-tv/watchlist-tv.component';
import { ScheduleTVComponent } from './pages/TV/schedule-tv/schedule-tv.component';
import { FirstMatchComponent } from './pages/TV/first-match/first-match.component';
import { UpcomingMatchComponent } from './pages/TV/upcoming-match/upcoming-match.component';
import { TitleTagComponent } from './pages/TV/title-tag/title-tag.component';
import { VideoComponentComponent } from './pages/TV/video-component/video-component.component';
import { VotingComponent } from './pages/AugmTable/voting/voting.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HomepageTVComponent,
    VideoTVComponent,
    VotestatsComponent,
    Votestep1Component,
    Votestep2Component,
    LiveinfosComponent,
    SubstitutePlayerComponent,
    StartingPlayerComponent,
    LiveMatchComponent,
    SubstitutePlayerBottomComponent,
    WatchlistTvComponent,
    ScheduleTVComponent,
    FirstMatchComponent,
    UpcomingMatchComponent,
    TitleTagComponent,
    VideoComponentComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
