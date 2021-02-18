import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  userName: string;
  job: string;
  data$: any=[];

  constructor(public usersService : UsersService) { }

  ngOnInit() {
  }

  addUser(){
    this.usersService.addUser(this.userName,this.job).subscribe((data: any = [])=>{
      console.log(data);
      this.data$ = data;
    });
  }

}
