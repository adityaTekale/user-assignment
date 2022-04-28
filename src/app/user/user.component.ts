import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userDetail: any;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.currentUserDetail.subscribe(
      (data) => (this.userDetail = data)
    );
  }

  editUser() {
    this.userService.viewUserDetail(this.userDetail);
    this.router.navigate(['/edit']);
  }
}
