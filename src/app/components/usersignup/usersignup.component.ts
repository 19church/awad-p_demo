import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit{

  userData = new FormGroup({
    User_Name: new FormControl(''),
    Password: new FormControl('')
  })

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit(): void {

  }

  createUser() {
    this.userService.createUser(this.userData.value).subscribe(
      data => {
        console.log(data)
        alert('Sign Up successfully');
        this.userData.reset();
      },
      err => {
        console.log(err);
      }
    );
  }

}

