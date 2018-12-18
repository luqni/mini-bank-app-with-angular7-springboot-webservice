import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // same autowired in spring dependency injection
  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://localhost:8080/Customer/customers');
  }

  update(customers:Customers){
    return this.httpClient.put('http://localhost:8080/Customer/customer', customers);
    
  }
  insert(customers:Customers){
    return this.httpClient.post('http://localhost:8080/Customer/post', customers);
  }
  
}
