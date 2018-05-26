import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
        <div class="container">
            <ul class="list-group" *ngFor="let user of users">
                <li class="list-group-item" >Name: {{ user.name }}</li>
                <li class="list-group-item" >Email: {{ user.email }}</li>
                <li class="list-group-item" >Phone: {{ user.phone }}</li>
            </ul>
            <br/>
        </div>
    `
})

export class SandboxComponent {

    users: any[];

    constructor(private dataService: DataService) {
        this.dataService.getData().subscribe((data) => {
            this.users = data;
        });
    }

}
