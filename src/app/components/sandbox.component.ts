import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
    selector: 'sandbox',
    template: `
    <h2> Hello World</h2>
    `
})

export class SandboxComponent {
    customer: Customer;
    customers: Customer[];

    constructor() {
        console.log('constructor ran...');
        this.customer = {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com'
        }

        this.customers = [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@gmail.com'
            },
            {
                id: 2,
                name: 'Brad Traversy',
                email: 'brad@gmail.com'
            }
        ];
    }
}
