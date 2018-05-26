import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>Hello World</h4>
        {{ people }}
        <ul>
            <li *ngFor="let person of people; let index = index">{{ index }}- {{ person }}</li>
        </ul>
        <ul>
            <li *ngFor="let person of people2">{{ person.firstName }} {{ person.lastName }}</li>
        </ul>
    `
})

export class SandboxComponent {

    people = ['Carl', 'Rick', 'Daryl', 'Glen'];
    people2 = [{
        firstName: 'Carl',
        lastName: 'Grimes'
    },
    {
        firstName: 'Rick',
        lastName: 'Rhee'
    },
    {
        firstName: 'Daryl',
        lastName: 'Smith'
    }
    ];

    constructor() {
        console.log('constructor ran...');
    }
}
