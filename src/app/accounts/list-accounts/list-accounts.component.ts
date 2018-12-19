import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit {
  listAccounts:Accounts[] = [];
  constructor(private accountService:AccountsService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.accountService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listAccounts=[];
      Object.assign(this.listAccounts, response);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    })
  }

}
