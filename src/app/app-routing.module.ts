import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddDetailsComponent } from './add-details/add-details.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './taskFour/parent/parent.component';
import { UserComponent } from './taskFive/user/user.component';
import { ViewUserComponent } from './taskFive/view-user/view-user.component';

const routes: Routes = [
  {path:'reactive', component: ReactiveFormComponent},
  {path:'driven', component: DrivenFormComponent},
  {path:'details', component: AddDetailsComponent},
  {path:'parent', component: ParentComponent},
  {path:'users', component: ViewUserComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
