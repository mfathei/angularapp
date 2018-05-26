import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
        <div class="container">
            <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" name="name" [(ngModel)]="user.name">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" name="email" [(ngModel)]="user.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" name="phone" [(ngModel)]="user.phone">
                </div>
                <input type="submit" value="Submit" class="btn btn-success">
            </form>
            <br/>
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
    user = {
        name: '',
        email: '',
        phone: ''
    };

    constructor(private dataService: DataService) {
        this.dataService.getData().subscribe((data) => {
            this.users = data;
        });
    }

    onSubmit(){
        this.dataService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        })
    }

}
