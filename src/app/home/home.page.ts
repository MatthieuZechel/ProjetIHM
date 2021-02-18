import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  usersList$ : Observable<any>;

  constructor(
    public router: Router,
    public usersService : UsersService
  ) {}

  ngOnInit(): void {
    this.usersList$ = this.usersService.getUsersList();
  }

  async selectedUser(id : number){
    sessionStorage.setItem('userId',String(id));
    await this.router.navigateByUrl('user-details');
  };

  async addUser(){
    await this.router.navigateByUrl('add-user');
  }

}
