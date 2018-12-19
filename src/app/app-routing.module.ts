import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { FormComponent } from './customers/form/form.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'createaccount',component:CreateaccountComponent},
  {path:'customerslist',component:CustomerslistComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
