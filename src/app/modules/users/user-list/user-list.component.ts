import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList = [];
  userRole = localStorage.getItem('designation');
  constructor(
    public users: UsersService
  ) { }

  ngOnInit(): void {
    this.users.getUsers({}).subscribe((data) => {
      if (data.success) {
        this.usersList = data.data;
      }
    })
  }

  delete(item) {
    this.users.deleteUser({id:item._id}).subscribe((data) => {
      if (data.success) {
        this.usersList = this.usersList.filter(xd => xd != item)
      }
    })
  }

}
