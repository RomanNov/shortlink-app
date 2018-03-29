import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent }   from './user-input/user-input.component';
import { ListLinksComponent }   from './list-links/list-links.component';


const routes: Routes = [
  { path: '', redirectTo: '/app/link', pathMatch: 'full' },
  { path: 'app/link', component: UserInputComponent },
  { path: 'app/list', component: ListLinksComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
