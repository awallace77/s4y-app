import { Component, OnInit } from '@angular/core';
import { UserDetailModel, UserModel } from './interfaces/user.model';
import { UserDaoService } from './services/user-dao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 's4y-app';
  constructor(){}

  ngOnInit(): void {

  }
}
