import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-showsearched',
  templateUrl: './showsearched.component.html',
  styleUrls: ['./showsearched.component.css']
})
export class ShowsearchedComponent implements OnInit {
searchedData: Customer[];

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.searchedData = this.service.getSearchedData();
  }

}
