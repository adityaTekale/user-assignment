import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userDetail = new BehaviorSubject('Basic Approval is required!');
  currentUserDetail = this.userDetail.asObservable();

  constructor(private http: HttpClient) {}
  URL: string = environment.apiEndPoint;

  viewUserDetail(data: any) {
    this.userDetail.next(data);
  }

  getUserList() {
    return new Promise(async (resolve, _) => {
      const success = (res: any) => {
        resolve(res);
      };
      const error = (err: any) => {};
      return this.http.get(this.URL).subscribe(success, error);
    });
  }
}
