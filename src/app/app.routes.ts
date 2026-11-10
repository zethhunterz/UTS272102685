import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path: '',redirectTo: 'profile',pathMatch:'full'},
    {path: 'profile',component:Profile},
    { path: 'admin', component: Admin }

];
