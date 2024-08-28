import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

export type User = {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
};

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})


export class UserCardComponent {
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get<User[]>('https://fakestoreapi.com/users').subscribe((users: User[]) => {
      this.users = users;
    });
  }
  @Input() users!: User[];
} 
