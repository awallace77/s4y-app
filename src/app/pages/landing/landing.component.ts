import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  title = `Looking to make an impact on your community?`
  title2 = `Find a Child and Youth Service Provider`
  firstCall = `Sign up and get listed on Canada’s largest directory of professional Child and Youth Service Providers.`
  constructor() { }

  ngOnInit(): void {
  }

}
