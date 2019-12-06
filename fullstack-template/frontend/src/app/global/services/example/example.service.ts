import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class ExampleService{

    private hostURl:string;

    constructor(private http: HttpClient){
        this.hostURl=environment.host;
    }

    public treatSomeone(foodToTreat, toUserID){
        return this.http.post(`${this.hostURl}/api/example/treatSomeone`,
        {
            message:{
                food:foodToTreat,
                userID:toUserID
            }
        
        ,event:"treating"
        }
        )
    }

}