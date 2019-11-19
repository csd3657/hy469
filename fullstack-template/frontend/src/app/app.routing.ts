import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageTVComponent } from './pages/TV/homepage-tv/homepage-tv.component';
import { VideoTVComponent } from './pages/TV/video-tv/video-tv.component';
import { VotestatsComponent } from './pages/AugmTable/votestats/votestats.component';
<<<<<<< HEAD
import { LiveinfosComponent } from './pages/AugmTable/liveinfos/liveinfos.component';
import { SubstitutePlayerComponent } from './pages/AugmTable/liveinfos/substitute-player/substitute-player.component';
import { StartingPlayerComponent } from './pages/AugmTable/liveinfos/starting-player/starting-player.component';
=======
import { LiveMatchComponent } from './pages/TV/live-match/live-match.component';
>>>>>>> c5884b4430c4001d0a52fae87ce9a2caedf840f9

const routes: Routes = [
  {path: 'livematch', component:LiveMatchComponent},
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
