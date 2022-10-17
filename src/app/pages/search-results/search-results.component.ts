import { Component, OnInit } from '@angular/core';
import { UserDetailModel, UserModel } from 'src/app/interfaces/user.model';
import { UserDaoService } from 'src/app/services/user-dao.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  users: UserModel[];
  route;

  constructor(private userDao: UserDaoService,){}

  ngOnInit(): void {
    this.users = this.userDao.users;
  }

}
