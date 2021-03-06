import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private hostURl: string;

  constructor(private http: HttpClient) { 
    this.hostURl = environment.host;

  }

  public openMatchToTv(openMatch) {
    return this.http.post(`${this.hostURl}/api/example/openMatchToTv`,
      {
        message: {
          show: openMatch
        }
        , 
        event:"openMatch"
      }
    )
  }

  public closeMatchToTv(closeMatch) {
    return this.http.post(`${this.hostURl}/api/example/closeMatchToTv`,
      {
        message: {
          show: closeMatch
        }
        , 
        event:"closeMatch"
      }
    )
  }

  public play_Match(is_paused) {
    return this.http.post(`${this.hostURl}/api/example/play_Match`,
      {
        message: {
          show: is_paused
        }
        , 
        event:"pause_play_Match"
      }
    )
  }

  

  public open_TVmenu(menu_is_open) {
    return this.http.post(`${this.hostURl}/api/example/open_TVmenu`,
      {
        message: {
          show: menu_is_open
        }
        , 
        event:"open_TVmenu"
      }
    )
  }

  public controlMenuTV(button) {
    return this.http.post(`${this.hostURl}/api/example/controlMenuTV`,
      {
        message: {
          show: button
        }
        , event:"control_TVmenu"
        
      }
    )
  }

  public VideoMenuTV(button) {
    return this.http.post(`${this.hostURl}/api/example/VideoMenuTV`,
      {
        message: {
          show: button
        }
        , event:"VideoMenuTV"
        
      }
    )
  }

  
  public exitVideo(exit_video) {
    return this.http.post(`${this.hostURl}/api/example/exitVideo`,
      {
        message: {
          show: exit_video
        }
        , event:"exitVideo"
        
      }
    )
  }

  public openStatisticsToOtherDevices(device) {
    return this.http.post(`${this.hostURl}/api/example/openStatisticsToOtherDevices`,
      {
        message: {
          show: device
        }
        , event:"openStatisticsToOtherDevices"
        
      }
    )
  }
  

  public open_cska_article() {
    return this.http.post(`${this.hostURl}/api/example/open_cska_article`,
      {
        message: {
          show: true
        }
        , event:"open_cska_article"
        
      }
    )
  }
  

  public defaultPageWall() {
    return this.http.post(`${this.hostURl}/api/example/defaultPageWall`,
      {
        message: {
          show: true
        }
        , event:"defaultPageWall"
        
      }
    )
  }

  
  public open_Punter_ToWall() {
    return this.http.post(`${this.hostURl}/api/example/open_Punter_ToWall`,
      {
        message: {
          show: true
        }
        , event:"open_Punter_ToWall"
        
      }
    )
  }
  
  

}
