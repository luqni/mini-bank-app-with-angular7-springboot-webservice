import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient:HttpClient) { }
  getList(customers?){
    let params:String = ' ';
    if(customers){
      params = '?customers=' + customers;
    }
    return this.httpClient.get('http://localhost:8080/Account/list'+params);
  }
  getCustomer(){
    return this.httpClient.get('http://localhost:8080/Customer/customers');
  }
  insertAccounts(accounts:Accounts){
    return this.httpClient.post('http://localhost:8080/Account/post',accounts);
  }
  updateAccounts(accounts:Accounts){
    return this.httpClient.put('http://localhost:8080/Account/update',accounts);
  }
  deletAccounts(accounts:Accounts){
    return this.httpClient.delete('http://localhost:8080/Account/hapus/'+accounts.id);
  }

}
