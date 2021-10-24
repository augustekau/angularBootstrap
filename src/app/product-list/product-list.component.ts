import { Component, OnInit } from "@angular/core";
import { ELEMENT_DATA } from "../data";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
