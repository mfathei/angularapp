import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <!-- <h4>Hello 
        <span *ngIf="showName">{{ name }}</span>
        <span *ngIf="!showName">World</span>
        </h4> -->
        <span *ngIf="showName; else noName">Hello {{ name }}</span>
        <ng-template #noName> Hello World</ng-template>
        <hr/>
        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="'1'">One</div>
            <div *ngSwitchCase="'2'">Two</div>
            <div *ngSwitchCase="'3'">Three</div>
            <div *ngSwitchDefault>Hello</div>
        </div>
    `
})

export class SandboxComponent {

    name: string = 'John Doe';
    showName: boolean = false;
    greeting: number = 11;

    constructor() {
        console.log('constructor ran...');
    }
}
