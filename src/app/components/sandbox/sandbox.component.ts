import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h2>Hello World</h2>
        <div [style.font-size]="isSpecial ? 'x-large': 'smaller'">Font size depending on isSpecial</div>
        <div [ngStyle]="currentStyles">This div is initially special & saveable</div>
    `
})

export class SandboxComponent {

    isSpecial: boolean = true;
    canSave: boolean = true;
    currentStyles = {};

    constructor() {
        console.log('constructor ran...');
        this.setCurrentStyles();
    }

    setCurrentStyles() {
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'bold',
            'font-size': this.isSpecial ? '24px' : '12px'
        }
    }
}
