import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { UpdateComponent } from '../update/update.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService, private router: Router) { } //router added for update fn

  ngOnInit() {
    this.customers = this.customerService.getAllCustomers();
  }
  delete(i: number) {
    if (confirm('Are you sure you want to delete ?')) {
      this.customerService.deleteCustomer(i);
    }
  }
  update(i: number) {
  this.customerService.setIndex(i);
  this.router.navigate(['update']);
  }
}
