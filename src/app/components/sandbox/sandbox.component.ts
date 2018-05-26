import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h2>3 ways to bind properties</h2>
        <div><img src="{{ imageUrl }}"></div>
        <div><img [src]="imageUrl"></div>
        <div><img bind-src="imageUrl"></div>

        <div>Image Location: <span [textContent]="imageUrl"></span></div>
        <hr>
        <h2>Create Post</h2>
        <p [hidden]="isUnchanged">Post has been changed, please save</p>
        <button [disabled]="isUnchanged">Save</button>
    `
})

export class SandboxComponent {

    imageUrl: string = 'http://lorempixel.com/400/200';
    isUnchanged: boolean = false;

    constructor() {
        console.log('constructor ran...');
    }
}
