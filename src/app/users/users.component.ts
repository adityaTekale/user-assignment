import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: Array<any> = [];

  constructor(private userService: UserService, private router: Router) {}
  async ngOnInit() {
    const result: any = await this.userService.getUserList();
    this.userList = result;
  }

  viewUser(user: any) {
    this.userService.viewUserDetail(user);
    this.router.navigate(['/user']);
  }
}
