import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  public sellerId: number;

  constructor( private rounterInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.rounterInfo.snapshot.params['id'];
  }

}
