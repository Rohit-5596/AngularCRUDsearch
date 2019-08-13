import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
cust: Customer = {id: 0, name: ' ', email: '', phone: 0};
  constructor(private custService: CustomerService, private router: Router) { }

  ngOnInit() {
  }
  add() {
    this.custService.addCustomer(this.cust)
    alert('customer added successfully');
    this.router.navigate(['list']);
    }

}
