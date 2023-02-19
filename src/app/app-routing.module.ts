import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { HomeComponent } from './home/home.component';
import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'create',component:CreateComponent},
{path:'manage',component:ManageComponent},
{path:'edit/:i', component:EditComponent},
{path:'view/:i', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
