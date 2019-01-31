import { Component, OnInit } from '@angular/core';
import {Block, DataService} from '@shared/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public blocks: Block[];

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getBlocks().subscribe(blocks => {
            this.blocks = blocks['data'];
            console.log(this.blocks);
        });
    }

    firstClick() {
        this.data.firstClick();
    }

}
