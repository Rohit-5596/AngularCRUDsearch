import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {
  cust: Customer[];
  searchedItems: Customer[];
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.cust = this.service.getAllCustomers();
  }

  filterData(value: string) {
    this.searchedItems = this.cust.filter( customer => customer.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    this.service.setSearchedData(this.searchedItems); //for showing data in another page after search
    if (this.searchedItems.length > 0) {
      alert('data found, to view use showsearched menu');
      this.service.getSearchedData();
    } else {
      alert('Not found please try with registered name');
    }
    }


}
