import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  route = inject(ActivatedRoute);
  router = inject(Router);
  data:any;
  ngOnInit() {
    this.route.data.subscribe({
      next: value => {
        this.data = value;
      }
    })
  };
}
