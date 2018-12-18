import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customers } from '../customers/customers';
import { CustomersService } from '../customers/customers.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ngOnInit() {
    
  }

  @Input()
  customers:Customers;

  @Output()
  result = new EventEmitter();

  constructor(private customersService:CustomersService) { }

  submitDataInsert(){
    this.customersService.update(this.customers).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

  cancelChanges(){
    this.result.emit(true);
  }
}

