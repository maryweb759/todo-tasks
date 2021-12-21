import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddDetailsComponent } from './add-details/add-details.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './taskFour/parent/parent.component';
import { UserComponent } from './taskFive/user/user.component';
import { ViewUserComponent } from './taskFive/view-user/view-user.component';
import { ShareDataComponent } from './taskFive/share-data/share-data.component';
import { ShowDataComponent } from './taskFive/show-data/show-data.component';
import { AddUserComponent } from './taskFive/add-user/add-user.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { SibligComponent } from './siblig/siblig.component';

const routes: Routes = [
  {path:'', redirectTo:'reactive', pathMatch:'full'},
  {path:'reactive', component: ReactiveFormComponent},
  {path:'driven', component: DrivenFormComponent},
  {path:'details', component: AddDetailsComponent},
  {path:'parent', component: ParentComponent},
  {path:'users', component: ViewUserComponent},
  {path:'adddata', component: ShareDataComponent},
  {path:'showdata', component: ShowDataComponent},
  {path:'siblig', component: SibligComponent},
  {path:'sibling2', component: Sibling2Component},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
