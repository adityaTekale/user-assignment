import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  userForm!: FormGroup;
  userDetail: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      username: [''],
      website: [''],
      city: [''],
      lat: [''],
      lng: [''],
      street: [''],
      suite: [''],
      zipcode: [''],
      bs: [''],
      catchPhrase: [''],
      cityName: [''],
    });
  }

  ngOnInit(): void {
    this.userService.currentUserDetail.subscribe(
      (data) => (this.userDetail = data)
    );
    this.userForm.patchValue({
      name: this.userDetail.name,
      email: this.userDetail.email,
      phone: this.userDetail.phone,
      username: this.userDetail.username,
      website: this.userDetail.website,
      city: this.userDetail.address.city,
      lat: this.userDetail.address.geo.lat,
      lng: this.userDetail.address.geo.lng,
      street: this.userDetail.address.street,
      suite: this.userDetail.address.suite,
      zipcode: this.userDetail.address.zipcode,
      bs: this.userDetail.company.bs,
      catchPhrase: this.userDetail.company.catchPhrase,
      cityName: this.userDetail.company.name,
    });
  }
}
