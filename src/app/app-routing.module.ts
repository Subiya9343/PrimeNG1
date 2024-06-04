import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
    { path: 'Login', component: LoginComponent},
    { path: 'Home', component: HomeComponent},
    { path: 'Register', component: RegisterComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'}
    
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}