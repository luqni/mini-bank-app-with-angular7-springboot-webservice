import { Component, OnInit } from '@angular/core';
import { Transactions } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent implements OnInit {
  listTransaction:Transactions[]=[];
  constructor(private transactionService:TransactionsService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.transactionService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listTransaction=[];
      console.log("list"+this.listTransaction);
      Object.assign(this.listTransaction,response); 
    },(err)=>{
      alert('Error : '+JSON.stringify(err));
    });
  }
  deletTransactions(id){
    if(confirm('Mau hapus Aku Nich.. :( ?')){
      this.transactionService.deletTransaction(id).subscribe(res=>{
        alert('berhasil');
        this.loadData();
      },err=>{
        alert('gagal kamu nakal');
      });
    }
    
  }
  view(){
    
  }

}
