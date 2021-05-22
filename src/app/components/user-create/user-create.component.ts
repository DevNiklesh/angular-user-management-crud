import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user = {
    name: 'Alisha',
    email: 'alisha@alisha.com',
    age: 25,
    bio: 'This is my new Bio'
  };

  loading = false;
  submitted = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  createUser(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      age: this.user.age,
      bio: this.user.bio,
    };

    this.loading = true;
    this.userService.create(data)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.submitted = true;
      }, err => {
        console.log(err);
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      age: 0,
      bio: ''
    };
  }


}
