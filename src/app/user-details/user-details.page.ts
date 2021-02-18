import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  private selectedUserId: number;

  userDetail$: Observable<any>;

  constructor(
    public usersService : UsersService
  ) {
   }

  ngOnInit() {
    this.selectedUserId = Number(sessionStorage.getItem('userId'));
    this.userDetail$ = this.usersService.getUserDetail(this.selectedUserId);
  }

}
