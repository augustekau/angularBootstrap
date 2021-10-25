import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ELEMENT_DATA } from "../data";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit {
  id: any;
  product: any = {};
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      if (ELEMENT_DATA[i].id == this.id) {
        this.product = ELEMENT_DATA[i];
        break;
      }
    }

    // for ciklas naudojamas instead this
    // this.product = ELEMENT_DATA[this.id - 1];
  }
}
