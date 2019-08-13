import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
/*
@author: rohit
Service class access data from json file
*/
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string = '../assets/customer.json';
  customers: Customer[];
  status: string;
  filteredData: Customer[]; //for search operation
  index: number; //for update index no
  customer: Customer; //for update fn
  constructor(private http: HttpClient) {
    this.getCustomers();
  }

  getData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }
  handleError(error) {
    console.log(error);
    return throwError(error);
  }

  getCustomers() {
    this.getData().subscribe((data: Customer[]) => {
       this.customers = data;
       console.log('Datas are ' + this.customers);
    }, error => {alert('problem with service/url try again')});
  }
  getAllCustomers() {
    return this.customers;
  }
  deleteCustomer(i: number): void {
    this.customers.splice(i, 1); //(index, 1) means delete record ... (index, 0) means add record
  }
  addCustomer(customer: Customer) {
    this.customers.push(customer);
    return true;
  }
  setSearchedData(data) {
   this.filteredData = data;
  }
  getSearchedData() {
   return this.filteredData;
   }
   setIndex(i) {
     this.index = i;
   } // refer to update() in cutomerlist.comp.ts 
   getIndex() {
    return this.index;
  } //for update
   getCustomer(i) {
    return this.customers[i];
   } ////for update
   update(customer) {
     this.customers[this.customers.indexOf[customer]] = customer;
   } //for update
}
