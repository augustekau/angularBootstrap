import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  //aprasome kad sis component gali gauti kintapaji is isores, pavadinda product
  @Input() product: any;
  constructor() {}

  ngOnInit(): void {}
}
