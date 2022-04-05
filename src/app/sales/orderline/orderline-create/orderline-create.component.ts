import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../order/order.class';
import { OrderService } from '../../order/order.service';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-create',
  templateUrl: './orderline-create.component.html',
  styleUrls: ['./orderline-create.component.css']
})
export class OrderlineCreateComponent implements OnInit {

  orderline: Orderline = new Orderline();
  orders!: Order[];

  constructor(
    private ordlnsvc: OrderlineService,
    private ordsvc: OrderService,
    private router: Router
  ) { }

  save(): void {
    this.orderline.orderId = +this.orderline.orderId;
    this.ordlnsvc.create(this.orderline).subscribe({
      next: (res) => {
        console.debug("Orderline added");
        this.router.navigateByUrl("/orderline/list");
      },
      error: (err) => { console.error(err); }
    });
  }

  ngOnInit(): void {
    this.ordsvc.list().subscribe({
      next: (res) => {
        console.debug("Orders:", res);
        this.orders = res;
      }
    });
  }

}
