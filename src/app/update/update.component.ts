import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  cust: Customer = {id: 0, name: ' ', email: '', phone: 0};
  constructor(private custService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.cust = this.custService.getCustomer(this.custService.getIndex());
  }
  update() {
    this.custService.update(this.cust);
    this.router.navigate(['list']);
  }

}
