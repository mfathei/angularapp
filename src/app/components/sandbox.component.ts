import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
    <h2>{{ name }} is {{ age }} years old</h2>
    <h2>{{ person.firstName }} {{ person.lastName }}</h2>
    <ul>
        <li>{{ 'Hello World' }}</li>
        <li>{{ 1 + 1 }}</li>
        <li>{{ showAge() }}</li>
    </ul>
    `
})

export class SandboxComponent {
    name = "John Doe";
    age = 35;
    person = {firstName: "Steve", lastName: "Smith"};

    constructor(){
        console.log('constructor ran...');
        // this.age = 36;
        this.hasBirthday();
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}
