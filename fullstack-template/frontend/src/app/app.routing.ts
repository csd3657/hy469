import { SearchTvComponent } from './pages/TV/search-tv/search-tv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { VotestatsComponent } from './pages/AugmTable/votestats/votestats.component';



import { LiveinfosComponent } from './pages/AugmTable/liveinfos/liveinfos.component';
import { SubstitutePlayerComponent } from './pages/AugmTable/liveinfos/substitute-player/substitute-player.component';
import { StartingPlayerComponent } from './pages/AugmTable/liveinfos/starting-player/starting-player.component';


import { LiveMatchComponent } from './pages/TV/live-match/live-match.component';
import { WatchlistTvComponent } from './pages/TV/watchlist-tv/watchlist-tv.component';
import { ScheduleTVComponent } from './pages/TV/schedule-tv/schedule-tv.component';



const routes: Routes = [
  {path: 'ScheduleTv', component:ScheduleTVComponent},
  {path: 'SearchTv', component:SearchTvComponent},
  {path: 'WatchlistTv', component:WatchlistTvComponent},
  {path: 'VideosTv', component:VideoTVComponent},
  {path:'HomepageTv' , component: HomepageTVComponent},
  {path:'TableVote' , component: VotestatsComponent},
  {path:'TableLiveInfos' , component: LiveinfosComponent},
  {path:'StartingPlayer' , component: StartingPlayerComponent},
  {path:'SubstitutePlayer' , component: SubstitutePlayerComponent},
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
