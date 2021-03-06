import { SearchTvComponent } from './pages/TV/search-tv/search-tv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { LiveinfosComponent } from './pages/AugmTable/liveinfos/liveinfos.component';
import { SubstitutePlayerComponent } from './pages/AugmTable/liveinfos/substitute-player/substitute-player.component';
import { StartingPlayerComponent } from './pages/AugmTable/liveinfos/starting-player/starting-player.component';
import { WatchlistTvComponent } from './pages/TV/watchlist-tv/watchlist-tv.component';
import { ScheduleTVComponent } from './pages/TV/schedule-tv/schedule-tv.component';
import { VotingComponent } from './pages/AugmTable/voting/voting.component';
import { WallnewsComponent } from './pages/Wall/wallnews/wallnews.component';
import { PlayerInfosComponent } from './pages/Wall/player-infos/player-infos.component';
import { TeamInfosComponent } from './pages/Wall/team-infos/team-infos.component';
import { PrematchStatisticsComponent } from './pages/Wall/prematch-statistics/prematch-statistics.component';
import { EmampleComponent } from './pages/emample/emample.component';
import { Votestep2Component } from './pages/AugmTable/voting/votestep2/votestep2.component';
import { Votestep1Component } from './pages/AugmTable/voting/votestep1/votestep1.component';
import { Votestep3Component } from './pages/AugmTable/voting/votestep3/votestep3.component';
import { PlayersListComponent } from './pages/Mobile/players-list/players-list.component';
import { SMhomepageComponent } from './pages/Mobile/smhomepage/smhomepage.component';
import { TeamsListComponent } from './pages/Mobile/teams-list/teams-list.component';
import { MainmenuComponent } from './pages/Mobile/mainmenu/mainmenu.component';
import { SMscheduleComponent } from './pages/Mobile/smschedule/smschedule.component';
import { PlayerProfilePageComponent } from './pages/Mobile/player-profile-page/player-profile-page.component';
import { PlayerProfileStatisticsComponent } from './pages/Mobile/player-profile-statistics/player-profile-statistics.component';
import { NewsMobileComponent } from './pages/Mobile/news-mobile/news-mobile.component';
import { SpecificNewsComponent } from './pages/Mobile/specific-news/specific-news.component';
import { LiveMatchComponent } from './pages/TV/live-match/live-match.component';
import { RemotecontrolComponent } from './pages/Mobile/remotecontrol/remotecontrol.component';
import { SpecificPageTeamComponent } from './pages/Mobile/teams-list/specific-page-team/specific-page-team.component';
import { SpecificTeamNewsComponent } from './pages/Mobile/teams-list/specific-page-team/specific-team-news/specific-team-news.component';
import { SpecificTeamStatisticsComponent } from './pages/Mobile/teams-list/specific-page-team/specific-team-statistics/specific-team-statistics.component';
import { LastFiveResultsComponent } from './pages/Wall/last-five-results/last-five-results.component';
import { DefaultPageWallComponent } from './pages/Wall/default-page-wall/default-page-wall.component';
import { AugmTableDefaultComponent } from './pages/AugmTable/augm-table-default/augm-table-default.component';



const routes: Routes = [
  { path: 'ScheduleTv', component: ScheduleTVComponent },
  { path: 'SearchTv', component: SearchTvComponent },
  { path: 'WatchlistTv', component: WatchlistTvComponent },
  { path: 'VideosTv', component: VideoTVComponent },
  { path: 'HomepageTv', component: HomepageTVComponent },
  { path: 'HomepageTv/:id', component: HomepageTVComponent },
  {
    path: 'TableVote',
    component: VotingComponent,
    children: [
      {
        path: 'VoteMvp1',
        component: Votestep1Component
      },
      {
        path: 'VoteMvp2',
        component: Votestep2Component
      },
      {
        path: 'VoteMvp3',
        component: Votestep3Component
      }
    ]
  },
  { path: 'RealVsMaccabi', component: LiveMatchComponent },
  { path: 'TeamsMobile/AXM/Statistics', component: SpecificTeamStatisticsComponent },
  { path: 'TeamsMobile/AXM', component: SpecificPageTeamComponent },
  { path: 'TeamsMobile/AXM/News', component: SpecificTeamNewsComponent },
  { path: 'TableLiveInfos', component: LiveinfosComponent },
  { path: 'NewsMobile/CSKARoster', component: SpecificNewsComponent },
  { path: 'NewsMobile', component: NewsMobileComponent },
  { path: 'TeamsMobile', component: TeamsListComponent },
  { path: 'PlayersMobile/KevinPunter', component: PlayerProfilePageComponent },
  { path: 'PlayersMobile/KevinPunter/Statistics', component: PlayerProfileStatisticsComponent },
  { path: 'TeamsMobile', component: TeamsListComponent },
  { path: 'PlayersMobile', component: PlayersListComponent },
  { path: 'StartingPlayer', component: StartingPlayerComponent },
  { path: 'SubstitutePlayer', component: SubstitutePlayerComponent },
  { path: 'WallNews', component: WallnewsComponent },
  { path: 'PlayerInfoWall', component: PlayerInfosComponent },
  { path: 'LastFiveResults', component: LastFiveResultsComponent },
  { path: 'TeamInfoWall', component: TeamInfosComponent },
  { path: 'PrematchStatistics', component: PrematchStatisticsComponent },
  { path: 'EMAMPLE', component: EmampleComponent },
  { path: 'SMschedule', component: SMscheduleComponent },
  { path: 'SMhome', component: SMhomepageComponent },
  { path: 'SMmenu', component: MainmenuComponent },
  { path: 'SMschedule', component: SMscheduleComponent },
  { path: 'SMplayers', component: PlayersListComponent },
  { path: 'SMnews', component: NewsMobileComponent },
  { path: 'SMremotecontrol', component: RemotecontrolComponent },
  { path: 'WallDefault', component: DefaultPageWallComponent },
  { path: 'AugmTableDefault', component: AugmTableDefaultComponent },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
