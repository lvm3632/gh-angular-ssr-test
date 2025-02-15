import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "./users.service";

export const userDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const userService = inject(UsersService);
  const id = Number(route.paramMap.get('id'));
  return userService.getUserById(id);
};
