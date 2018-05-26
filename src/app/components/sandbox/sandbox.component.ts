import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h2 [class.special]="isSpecial">Hello World</h2>
        <h2 [ngClass]="currentClasses">This text is initially special and saveable</h2>
    `,
    styles: [`
        .special{
            color: green;
        }

        .saveable {
            text-transform: uppercase
        }
    `]
})

export class SandboxComponent {

    isSpecial: boolean = true;
    canSave: boolean = true;
    isSaveable: boolean = true;
    currentClasses = {};

    constructor() {
        console.log('constructor ran...');
        this.setCurrentClasses();
    }

    setCurrentClasses() {
        this.currentClasses = {
            special: this.canSave,
            saveable: this.isSaveable
        }
    }
}
