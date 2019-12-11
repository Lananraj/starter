import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApplication } from './application';


@Injectable({
    providedIn : 'root',
})

export class BatchService {

    private serviceURL = "http://localhost:3000/applications";
    application : IApplication[];
    
    constructor(private httpclient : HttpClient){}

     getApplications():Observable<IApplication[]> {
        return this.httpclient.get<IApplication[]>(this.serviceURL);
    }
}