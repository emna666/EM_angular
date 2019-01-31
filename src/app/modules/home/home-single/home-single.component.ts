import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Block, DataService} from "@shared/services/data.service";

@Component({
  selector: 'app-home-single',
  templateUrl: './home-single.component.html',
  styleUrls: ['./home-single.component.scss']
})
export class HomeSingleComponent implements OnInit {

  public block: Block;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.getBlock();
  }

  getBlock() {
    this.activatedRoute.params.subscribe(data=> {
      this.dataService.getBlockById(data.id).subscribe(user => {
        this.block = user['data'];
      });
    });
  }
}
