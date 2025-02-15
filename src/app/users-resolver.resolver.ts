import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "./users.service";

export const usersResolverResolver: ResolveFn<boolean> = (route, state) => {
  const userService = inject(UsersService);
  return userService.getUsers();
};
