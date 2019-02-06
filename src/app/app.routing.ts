import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const router: Routes = [

	{ path: '', component: IndexComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });