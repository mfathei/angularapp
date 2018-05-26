import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>{{ text }}</h4>
        <div class="container">
            <form>
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" [(ngModel)]="name" class="form-control" name="name">
                </div>
                <div class="form-group">
                    <label>Age:</label>
                    <input type="number" [(ngModel)]="age" class="form-control" name="age">
                </div>
                <input type="submit" value="submit" class="btn btn-success">
            </form>
            <h4>{{ name }}</h4>
            <h4>{{ age }}</h4>
        </div>
    `
})

export class SandboxComponent {

    name: string = '';
    age: number = 0;

}
