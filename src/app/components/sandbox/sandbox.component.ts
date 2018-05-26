import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>I was porn in {{ birthday }}</h4>
        <h4>I was porn in {{ birthday | date}}</h4>
        <h4>I was porn in {{ birthday | date | uppercase}}</h4>
        <h4>I was porn in {{ birthday | date:"dd/MM/yyyy" }}</h4>
        <h4>I was porn in {{ birthday | date:"yyyy" }}</h4>
        <p>I love {{ 'cake' | uppercase }}</p>
        <p>I HATE {{ 'CATS' | lowercase }}</p>
        <h3>Your total is: {{ total | currency }}</h3>
        <h3>Your total is: {{ total | currency:"GBP" }}</h3>
        <h3>Your percent is: {{ fee | percent }}</h3>
    `
})

export class SandboxComponent {

    birthday: Date = new Date(1981, 1, 15);
    total: number = 500;
    fee: number = 0.5;

    constructor() {
        console.log('constructor ran...');
    }
}
