import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GithubuserInfoComponent } from './githubuser-info/githubuser-info.component';
import { UiTableComponent } from './ui-table/ui-table.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'me', component: GithubuserInfoComponent },
  { path: 'table', component: UiTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
