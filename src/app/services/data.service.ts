import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    users: string[] = ['Sharon', 'Glad', 'Steve'];

    getUsers(): string[] {
        return this.users;
    }
}