import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserModule } from './user.module';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { } 