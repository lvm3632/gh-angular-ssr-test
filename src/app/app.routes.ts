import { Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {usersResolverResolver} from "./users-resolver.resolver";
import {UserDetailsComponent} from "./users/user-details/user-details.component";
import {userDetailsResolver} from "./user-details.resolver";

export const routes: Routes = [
    {
        path: 'lista',
        component: UsersComponent,
        resolve: {
            preData: usersResolverResolver
        },
        children: [
            {
                path: ':id',
                component: UserDetailsComponent,
                resolve: {user : userDetailsResolver}
            },
        ]
    },

    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
