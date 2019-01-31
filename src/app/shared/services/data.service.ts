import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import {Observable} from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getBlocks() {
        return this.http.get(`${environment.url}/unknown`);
    }

    getBlockById(id): Observable<any> {
        return this.http.get<any>(`${environment.url}/unknown/${id}`);
    }

    firstClick() {
        return console.log('clicked');
    }
}

export interface Block {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}