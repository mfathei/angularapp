import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h4>{{ text }}</h4>
        <input type="text" (keyup)="fireEvent($event)" placeholder="Key Up" ><br>
        <input type="text" (keydown)="fireEvent($event)" placeholder="Key Down" ><br>
        <input type="text" (focus)="fireEvent($event)" placeholder="focus" ><br>
        <input type="text" (blur)="fireEvent($event)" placeholder="blur" ><br>
        <input type="text" (cut)="fireEvent($event)" placeholder="cut" ><br>
        <input type="text" (copy)="fireEvent($event)" placeholder="copy" ><br>
        <input type="text" (paste)="fireEvent($event)" placeholder="paste" ><br>
        <input type="text" (keyup)="changeText($event)" placeholder="change text" value="{{ text }}"><br>
        <h2>{{text}}</h2>
    `
})

export class SandboxComponent {

    text: string = 'Hello';

    fireEvent(e) {
        console.log(e.type);
    }

    changeText(e){
        this.text = e.target.value;
    }
}
