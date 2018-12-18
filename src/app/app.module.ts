import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { CustomersService } from './customers/customers.service';
import { FormComponent } from './customers/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomersComponent,
    AccountsComponent,
    TransactionsComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    CreateaccountComponent,
    AccountlistComponent,
    CustomerslistComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
