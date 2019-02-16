import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {NgForm} from '@angular/forms';
import { slidingDoorAnimation } from '../animation';

import { User }    from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slidingDoorAnimation]
})
export class LoginComponent implements OnInit {

  model = new User('', '', null, null);
  public slidingDoorValue:string ='out';
  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));


  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }


  check(event: KeyboardEvent) {
    // 31 and below are control keys, don't block them.
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }

  onSubmit(userForm: NgForm) { 
    this.authService.RegisterUser(this.model);
    userForm.resetForm();
    this.newUser();
  }
 
  newUser() {
    this.model = new User('', '', null, null);
  }

}
