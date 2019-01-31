import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.scss']
})
export class HomeBlockComponent implements OnInit {

  @Input() block;
  constructor() { }

  ngOnInit() {
  }

}
