import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>{{ text }}</h4>
        <div class="container">
            <form novalidate  #f="ngForm" (ngSubmit)="onSubmit(f)">
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" 
                    [(ngModel)]="user.name" 
                    class="form-control" 
                    name="name"
                    #userName="ngModel"
                    minlength="2"
                    required
                    >
                </div>
                <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger">Name is required</div>
                <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger">Name is at least 2 characters</div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" 
                    [(ngModel)]="user.email" 
                    class="form-control" 
                    name="email"
                    #userEmail="ngModel"
                    required
                    >
                </div>
                <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger">Email is required</div>
                <div class="form-group">
                    <label>Phone:</label>
                    <input type="phone" 
                    [(ngModel)]="user.phone" 
                    class="form-control" 
                    name="phone"
                    #userPhone="ngModel"
                    minlength="10"
                    required
                    >
                </div>
                <div *ngIf="userPhone.errors?.required && userPhone.touched" class="alert alert-danger">Please enter a valid phone</div>
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

    user = {
        name: '',
        phone: '',
        email: ''
    };



    onSubmit({ value, valid }) {
        if (valid) {
            console.log(value);
        } else {
            console.log('Form is invalid');
        }
    }

}
