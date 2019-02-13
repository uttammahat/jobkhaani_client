import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindjobComponent } from './findjob/findjob.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ResetemailComponent } from './resetemail/resetemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerificationpageComponent } from './verificationpage/verificationpage.component';

const router: Routes = [

	{ path: '', component: IndexComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'how-it-works', component: HowItWorksComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'findjob', component: FindjobComponent },
	{ path: 'profile/complete', component: CompleteProfileComponent },
	{ path: 'resetemail', component: ResetemailComponent },
	{ path: 'resetpassword', component: ResetpasswordComponent },
	{ path: 'verify', component: VerificationpageComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });