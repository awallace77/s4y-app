import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  position: string;
  @Input()
  education: string;
  @Input()
  location: string;
  @Input()
  phone: string;
  @Input()
  email: string;
  @Input()
  image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
