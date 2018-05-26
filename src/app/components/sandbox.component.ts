import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
    <h2> Hello World</h2>
    `
})

export class SandboxComponent {
    name: string = "John Doe";
    age: number = 35;
    hasChildren: boolean = true;
    city: any = 'Boston';
    myNumbersArray: number[] = [1, 2, 3];
    myStringArray: string[] = ['hello', 'world'];
    myAnyArray: any[] = ['Hello', 21];
    myTuple: [number, string] = [15, 'Mahdy'];
    unusable: void = undefined;
    u: undefined = undefined;
    n: null = null;

    constructor() {
        console.log('constructor ran...');
    }
}
