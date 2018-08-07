import { User } from './../../Models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: User;

  constructor() {
    this.user = {
      firstName : 'John',
      lastName : 'Doe',
      age : 30,
      address : {
        number: '92/D',
        town: 'Ovitigama',
        city: 'Pugoda'
      },
      isDeleted: false
    }
    console.log(`The first name of the user is ${this.user.firstName}`);
  }
  ngOnInit() {
  }

}


