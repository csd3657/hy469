import { SearchTvComponent } from './pages/TV/search-tv/search-tv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { VotestatsComponent } from './pages/AugmTable/voting/votestats/votestats.component';



import { LiveinfosComponent } from './pages/AugmTable/liveinfos/liveinfos.component';
import { SubstitutePlayerComponent } from './pages/AugmTable/liveinfos/substitute-player/substitute-player.component';
import { StartingPlayerComponent } from './pages/AugmTable/liveinfos/starting-player/starting-player.component';


import { LiveMatchComponent } from './pages/TV/live-match/live-match.component';
import { WatchlistTvComponent } from './pages/TV/watchlist-tv/watchlist-tv.component';
import { ScheduleTVComponent } from './pages/TV/schedule-tv/schedule-tv.component';
import { VotingComponent } from './pages/AugmTable/voting/voting.component';
import { WallnewsComponent } from './pages/Wall/wallnews/wallnews.component';
import { PlayerInfosComponent } from './pages/Wall/player-infos/player-infos.component';
import { TeamInfosComponent } from './pages/Wall/team-infos/team-infos.component';
import { PlayersListComponent } from './pages/Mobile/players-list/players-list.component';
import { PrematchStatisticsComponent } from './pages/Wall/prematch-statistics/prematch-statistics.component';
import { EmampleComponent } from './pages/emample/emample.component';



const routes: Routes = [
  {path: 'PlayersMobile', component:PlayersListComponent},
  {path: 'ScheduleTv', component:ScheduleTVComponent},
  {path: 'SearchTv', component:SearchTvComponent},
  {path: 'WatchlistTv', component:WatchlistTvComponent},
  {path: 'VideosTv', component:VideoTVComponent},
  {path:'HomepageTv' , component: HomepageTVComponent},
  {path:'TableVote' , component: VotingComponent},
  {path:'TableLiveInfos' , component: LiveinfosComponent},
  {path:'StartingPlayer' , component: StartingPlayerComponent},
  {path:'SubstitutePlayer' , component: SubstitutePlayerComponent},
  {path:'WallNews' , component: WallnewsComponent},
  {path:'PlayerInfoWall' , component: PlayerInfosComponent},
  {path:'TeamInfoWall' , component: TeamInfosComponent},
  {path:'PrematchStatistics' , component: PrematchStatisticsComponent},
  {path:'EMAMPLE' , component: EmampleComponent},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
