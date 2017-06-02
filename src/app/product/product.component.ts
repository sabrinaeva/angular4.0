import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productID: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {this.productID = params['id']});
  }

}
