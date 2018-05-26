import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>I was porn in {{ birthday }}</h4>
        <button (click)="fireEvent($event)">Click Me</button><br>
        <button (mouseover)="fireEvent($event)">hover me</button><br>
        <button (mousedown)="fireEvent($event)">Mouse Down</button><br>
        <button (mouseup)="fireEvent($event)">Mouse Up</button><br>
        <button (dblclick)="fireEvent($event)">Double Click Me</button><br>
        <button (drag)="fireEvent($event)">Drag Me</button><br>
        <button (dragover)="fireEvent($event)">Drag Me</button><br>
    `
})

export class SandboxComponent {

    fireEvent(e){
        console.log(e.type);
        
    }
}
