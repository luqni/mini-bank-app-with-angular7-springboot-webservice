import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  customers:Customers;

  @Output()
  result = new EventEmitter();

  constructor(private customersService:CustomersService) { }

  ngOnInit() {
  }

  topics = ['Android','Iphone','Syimbia'];

  submitData(){
    this.customersService.update(this.customers).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  deleteData(){
    this.customersService.delete(this.customers).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  tambahData(){
    this.customersService.insert(this.customers).subscribe((response)=>{
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
