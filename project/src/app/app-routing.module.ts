import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ComposeComponent } from './compose/compose.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { Inbox1Component } from './inbox1/inbox1.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'nav',component:NavComponent},
  {path:'about',component:ComposeComponent},
 // {
   //// path: 'about',
   // component:NavbarComponent,
    //children: [
     // { path: '', component: ComposeComponent },
   // ]
 // },
   {path:'inbox',component:InboxComponent},
  {path:'message',component:Inbox1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
