import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform {

  transform(customers: Customer[], searchCriteria: string = ""): Customer[] {
    if(searchCriteria === "") {
      return customers;
    }
    let selectedCustomers: Customer[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let cust of customers) {
      if(
        cust.name.toLowerCase().includes(searchCriteria)
        || cust.sales.toString().includes(searchCriteria)
        || cust.stateCode.toLowerCase().includes(searchCriteria)
        ) {
        selectedCustomers.push(cust);
      }
    }
    return selectedCustomers;
  }

}
