import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchAutorizedDataComponent } from './fetch-autorized-data/fetch-autorized-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './shared/services/authguard.service';
import { AuthCallbackComponent } from './shared/components/auth-callback/auth-callback.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fetchData', component: FetchDataComponent },
  { path: 'fetchAutorizedData', component: FetchAutorizedDataComponent, canActivate: [AuthGuardService] },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
