import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomePageComponent,
        title: "Home Page"
    },
    {
        path: "login",
        component: LoginPageComponent,
        title: "Login Page"
    },
    {
        path: "todo",
        component: TodoContainerComponent,
        title: "Todo Page"
    }
];
