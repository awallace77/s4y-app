import { Component, OnInit } from '@angular/core';
import { UserModel } from './interfaces/user.model';
import { UserDaoService } from './services/user-dao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 's4y-app';
  users: UserModel[];

  constructor(private userDao: UserDaoService,){}

  ngOnInit(): void {
    this.users = this.userDao.users;
    console.log(this.users);
  }
}
