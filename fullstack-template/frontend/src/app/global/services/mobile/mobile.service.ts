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
}
