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
            <div  *ngFor="let user of users">
                <ul class="list-group">
                    <li class="list-group-item" >Name: {{ user.name }}</li>
                    <li class="list-group-item" >Email: {{ user.email }}</li>
                    <li class="list-group-item" >Phone: {{ user.phone }}</li>
                </ul>
                <button class="btn btn-danger btn-xs" (click)="deleteUser(user.id)">Delete</button>
                <br/>
                <br/>
            </div>
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

    onSubmit() {
        this.dataService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        });
    }

    deleteUser(id) {
        this.dataService.deleteUser(id).subscribe(res => {
            console.log(res);
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].id == id) {
                    this.users.splice(i, 1);
                }
            }
        });
    }

}
