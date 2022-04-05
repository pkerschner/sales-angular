import { Order } from "../order/order.class";

export class Orderline {
    id: number = 0;
    product: string = "";
    quantity: number = 0;
    price: number = 0;

    orderId: number = 0;
    order!: Order;
}