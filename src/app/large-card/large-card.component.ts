import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent implements OnInit {

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
  @Input()
  about: string;
  @Input()
  credentials: string[];
  @Input()
  focus: string[];
  @Input()
  experience: string[];
  @Input()
  rate: number;


  constructor() { }

  ngOnInit(): void {
  }

}
