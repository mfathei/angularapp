import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
            </ul>
        </div>
    `
})

export class SandboxComponent {

    users: string[];

    constructor(private dataService: DataService) {
        this.users = this.dataService.getUsers();
    }

}
