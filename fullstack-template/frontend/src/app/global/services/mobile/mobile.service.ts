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

  public closeMatchToTv(openMatch) {
    return this.http.post(`${this.hostURl}/api/example/closeMatchToTv`,
      {
        message: {
          show: openMatch
        }
        , 
        event:"openMatch"
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

}
