import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-detail',
  templateUrl: './orderline-detail.component.html',
  styleUrls: ['./orderline-detail.component.css']
})
export class OrderlineDetailComponent implements OnInit {

  orderline!: Orderline;
  showVerifyButton: boolean = false;

  constructor(
    private ordlnsvc: OrderlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;    
  }
  verifyRemove(): void {
    this.ordlnsvc.remove(this.orderline.id).subscribe({
      next: (res) => {
        console.debug("Orderline is deleted!");
        this.router.navigateByUrl("/orderline/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.ordlnsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Orderline:", res);
        this.orderline = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
