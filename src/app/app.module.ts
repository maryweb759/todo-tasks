import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CutPipe } from './pipe/cut.pipe';
import { ParentComponent } from './taskFour/parent/parent.component';
import { ChildComponent } from './taskFour/child/child.component';
import { UserComponent } from './taskFive/user/user.component';
import { AddUserComponent } from './taskFive/add-user/add-user.component';
import { ViewUserComponent } from './taskFive/view-user/view-user.component';
import { ShareDataComponent } from './taskFive/share-data/share-data.component';
import { ShowDataComponent } from './taskFive/show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    ViewDetailsComponent,
    ReactiveFormComponent,
    DrivenFormComponent,
    CutPipe,
    ParentComponent,
    ChildComponent,
    UserComponent,
    AddUserComponent,
    ViewUserComponent,
    ShareDataComponent,
    ShowDataComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
