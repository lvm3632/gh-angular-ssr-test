import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    JsonPipe,
    RouterOutlet
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  route = inject(ActivatedRoute);
  router = inject(Router);
  users:any;
  ngOnInit() {
    this.route.data.subscribe({
      next: value => {
       this.users = value;
      }
    })
  };

}
