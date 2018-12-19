import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient:HttpClient) { }
  getList(){
    return this.httpClient.get('http://localhost:8080/Account/accounts');
  }
  getCustomer(){
    return this.httpClient.get('http://localhost:8080/Customer/customers');
  }
  insertAccounts(accounts:Accounts){
    return this.httpClient.post('http://localhost:8080/Account/post',accounts);
  }

}
