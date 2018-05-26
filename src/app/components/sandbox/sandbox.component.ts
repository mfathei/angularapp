import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let p of data">{{ p }}</li>
            </ul>
        </div>
    `
})

export class SandboxComponent {

    data: any[] = [];

    constructor(private dataService: DataService) {
        this.dataService.getData().subscribe((data) => {
            this.data.push(data);
        });
    }

}
