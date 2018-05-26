import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>{{ text }}</h4>
        <button (click)="changeValue()">Change Value</button><br>
        <button (click)="changeValue()">Toggle Value</button><br>
        <p *ngIf="show">
        This is toggle
        </p>
    `
})

export class SandboxComponent {

    text: string = 'Hello World';
    show: boolean = true;

    changeValue(){
        // this.text = 'John Doe';
        this.show = !this.show;
    }
}
