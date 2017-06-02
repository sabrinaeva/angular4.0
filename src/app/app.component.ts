import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user/user.service';
import {User} from './user/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ]
})
export class AppComponent {
  users: User[];
  title = 'app';
  constructor(private router: Router,
  private userService: UserService) {
    this.users = userService.getUsers();
  }

  toProductInfo() {
    this.router.navigate(['/product', 4]);

  }
}
