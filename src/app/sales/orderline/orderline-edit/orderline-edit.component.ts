import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../order/order.class';
import { OrderService } from '../../order/order.service';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-edit',
  templateUrl: './orderline-edit.component.html',
  styleUrls: ['./orderline-edit.component.css']
})
export class OrderlineEditComponent implements OnInit {

  orderline!: Orderline;
  orders!: Order[];

  constructor(
    private ordlnsvc: OrderlineService,
    private ordsvc: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.ordlnsvc.change(this.orderline).subscribe({
      next: (res) => {
        console.debug("Orderline updated");
        this.router.navigateByUrl("/orderline/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.ordsvc.list().subscribe({
      next: (res) => {
        console.debug("Orders:", res);
        this.orders = res;
      },
      error: (err) => { console.error(err); }
    });
    let id = +this.route.snapshot.params["id"];
    this.ordlnsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Orderlines:", res);
        this.orderline = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
