import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>{{ text }}</h4>
        <div class="container">
            <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" [(ngModel)]="name" class="form-control" name="name">
                </div>
                <input type="submit" value="submit" class="btn btn-success">
            </form>
            <br>
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
            </ul>
        </div>
    `
})

export class SandboxComponent {

    name: string = '';
    users: string[] = ['Carl', 'John', 'Steve'];

    onSubmit() {
        this.users.push(this.name);
        this.name = '';
    }

}
