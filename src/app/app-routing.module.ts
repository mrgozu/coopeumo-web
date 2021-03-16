import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  { path: '**', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
