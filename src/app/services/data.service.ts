import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {


    constructor(private http: Http) {

    }

    getData() {
        return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map(res => res.json()));
    }

    addUser(user) {
        return this.http.post('https://jsonplaceholder.typicode.com/users', user).pipe(map(res => res.json()));
    }
}