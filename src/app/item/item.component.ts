import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  name: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUrlData();
  }

  getUrlData() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('id');
    });
  }

}
