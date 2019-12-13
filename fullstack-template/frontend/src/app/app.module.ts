import { VirtualComponent } from './cursor/virtual/virtual.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SidebarMenuComponent } from './pages/TV/sidebar-menu/sidebar-menu.component';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { VotestatsComponent } from './pages/AugmTable/voting/votestats/votestats.component';
import { Votestep1Component } from './pages/AugmTable/voting/votestep1/votestep1.component';
import { Votestep2Component } from './pages/AugmTable/voting/votestep2/votestep2.component';
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
import { RoundButtonComponent } from './pages/TV/round-button/round-button.component';
import { ScheduleMatchComponent } from './pages/TV/schedule-match/schedule-match.component';
import { WatchlistMatchComponent } from './pages/TV/watchlist-match/watchlist-match.component';
import { SearchTvComponent } from './pages/TV/search-tv/search-tv.component';
import { SearchBarComponent } from './pages/TV/search-bar/search-bar.component';
import { SearchOptionsComponent } from './pages/TV/search-options/search-options.component';
import { SearchVideosComponent } from './pages/TV/search-videos/search-videos.component';
import { StatsCategoryComponent } from './pages/AugmTable/voting/votestats/stats-category/stats-category.component';
import { PlayerCaseComponent } from './pages/AugmTable/voting/votestats/stats-category/player-case/player-case.component';
import { WallnewsComponent } from './pages/Wall/wallnews/wallnews.component';
import { PlayerInfosComponent } from './pages/Wall/player-infos/player-infos.component';
import { TeamInfosComponent } from './pages/Wall/team-infos/team-infos.component';
import { PrematchStatisticsComponent } from './pages/Wall/prematch-statistics/prematch-statistics.component';
import { StatsRowComponent } from './pages/Wall/prematch-statistics/stats-row/stats-row.component';
import { EmampleComponent } from './pages/emample/emample.component';
import { Votestep3Component } from './pages/AugmTable/voting/votestep3/votestep3.component';
import { PlayersListComponent } from './pages/Mobile/players-list/players-list.component';
import { HeaderTagComponent } from './pages/Mobile/header-tag/header-tag.component';
import { PlayerProfileComponent } from './pages/Mobile/players-list/players-profile/player-profile.component'
import { SideLetterComponent } from './pages/Mobile/side-letter/side-letter.component';
import { SMhomepageComponent } from './pages/Mobile/smhomepage/smhomepage.component';
import { SmlivematchComponent } from './pages/Mobile/smhomepage/smlivematch/smlivematch.component';
import { TopplaysComponent } from './pages/Mobile/smhomepage/topplays/topplays.component';
import { VideoComponent } from './pages/Mobile/smhomepage/topplays/video/video.component';
import { StandingsComponent } from './pages/Mobile/smhomepage/standings/standings.component';
import { TeamsListComponent } from './pages/Mobile/teams-list/teams-list.component';
import { TeamsProfileComponent } from './pages/Mobile/teams-list/teams-profile/teams-profile.component';
import { MainmenuComponent } from './pages/Mobile/mainmenu/mainmenu.component';
import { ChoiseComponent } from './pages/Mobile/mainmenu/choise/choise.component';
import { SMscheduleComponent } from './pages/Mobile/smschedule/smschedule.component';
import { BarComponent } from './pages/Mobile/smschedule/bar/bar.component';
import { MatchComponent } from './pages/Mobile/smschedule/match/match.component';
import { PlayerProfilePageComponent } from './pages/Mobile/player-profile-page/player-profile-page.component';
import { PlayerProfileStatisticsComponent } from './pages/Mobile/player-profile-statistics/player-profile-statistics.component';
import { StatisticsTagComponent } from './pages/Mobile/statistics-tag/statistics-tag.component';
import { PlayerProfileTagComponent } from './pages/Mobile/players-profile-tag/player-profile-tag.component';
import { NewsMobileComponent } from './pages/Mobile/news-mobile/news-mobile.component';
import { NewsBoxComponent } from './pages/Mobile/news-mobile/news-box/news-box.component';
import { SpecificNewsComponent } from './pages/Mobile/specific-news/specific-news.component';
import { RemotecontrolComponent } from './pages/Mobile/remotecontrol/remotecontrol.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HeaderTagComponent,
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
    VotingComponent,
    RoundButtonComponent,
    ScheduleMatchComponent,
    WatchlistMatchComponent,
    SearchTvComponent,
    SearchBarComponent,
    SearchOptionsComponent,
    SearchVideosComponent,
    StatsCategoryComponent,
    PlayerCaseComponent,
    WallnewsComponent,
    PlayerInfosComponent,
    TeamInfosComponent,
    PrematchStatisticsComponent,
    StatsRowComponent,
    EmampleComponent,
    Votestep3Component,
    PlayersListComponent,
    SideLetterComponent,
    SMhomepageComponent,
    SmlivematchComponent,
    TopplaysComponent,
    VideoComponent,
    StandingsComponent,
    TeamsListComponent,
    TeamsProfileComponent,
    MainmenuComponent,
    ChoiseComponent,
    SMscheduleComponent,
    BarComponent,
    MatchComponent,
    PlayerProfileComponent,
    PlayerProfilePageComponent,
    PlayerProfileTagComponent,
    PlayerProfileStatisticsComponent,
    StatisticsTagComponent,
    NewsMobileComponent,
    NewsBoxComponent,
    SpecificNewsComponent,
    VirtualComponent,
    RemotecontrolComponent
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
