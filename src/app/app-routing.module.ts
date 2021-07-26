
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/guard/auth.guard';



const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },

            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
            }


        ]
    },
    // { path: '**', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }