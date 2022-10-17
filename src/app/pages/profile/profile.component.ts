import { Component, OnInit } from '@angular/core';
import { UserDetailModel } from 'src/app/interfaces/user.model';
import { UserDaoService } from 'src/app/services/user-dao.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userDetail: UserDetailModel;

  constructor(private userDao: UserDaoService) { }

  ngOnInit(): void {

    this.userDetail = this.userDao.userDetailModel;
  }

}
