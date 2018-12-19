import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';


@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.scss']
})
export class CustomerslistComponent implements OnInit {
  listCustomers:Customers[] = [];
  showDetail:boolean = false; //dipakai untuk memunculkan atau menghilangkan detail
  selectedCustomer:Customers = new Customers();
  showDetail1:boolean = false;

  constructor(private customersService:CustomersService) { }
  //method yang pertama kali di jalankan saat page di buka
  ngOnInit() {
    this.loadData();
  }

  muncul() {
    this.showDetail1=true;
  }

  selectCustomers(customers:Customers){
    let copyCustomers = new Customers();
    copyCustomers.id = customers.id;
    copyCustomers.firtsname = customers.firtsname;
    copyCustomers.lastname = customers.lastname;
    copyCustomers.username = customers.username;
    copyCustomers.password = customers.password;
    copyCustomers.phonenumber = customers.phonenumber;
    copyCustomers.phonetype = customers.phonetype;
    copyCustomers.birthdate = customers.birthdate;

    this.selectedCustomer = customers;
    this.showDetail=true;
  }

  loadData() {
    this.customersService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listCustomers=[];
      Object.assign(this.listCustomers, response);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }

}
