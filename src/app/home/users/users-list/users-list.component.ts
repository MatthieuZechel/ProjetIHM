import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  @Input()
  usersList : any;

  @Output()
  selectedUser = new EventEmitter<number>();

  selectedUserId: number;

  constructor(public router : Router) { }

  ngOnInit() {
  }

}
