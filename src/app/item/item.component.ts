import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { Child } from '../child';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  name: string;
  item: Item;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.item = this.getDummyItem();
  }

  ngOnInit() {
    this.getUrlData();
  }

  getUrlData() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('id');
    });
  }
  getDummyItem(): Item {
    const item: Item = new Item();
    item.id = 1337;
    item.title = "Elite Space Cadets";
    item.children = this.getDummyChildren();
    return item;
  }
  getDummyChildren(): Array<Child> {
    const childOne: Child = new Child();
    childOne.id = 1;
    childOne.parentId = 1337;
    childOne.title = "Child One";
    const childTwo: Child = new Child();
    childTwo.id = 2;
    childTwo.parentId = 1337;
    childTwo.title = "Child Two";
    const childThree: Child = new Child();
    childThree.id = 3;
    childThree.parentId = 1337;
    childThree.title = "Child Three";
    const childFour: Child = new Child();
    childFour.id = 4;
    childFour.parentId = 1337;
    childFour.title = "Child Four";
    const childFive: Child = new Child();
    childFive.id = 5;
    childFive.parentId = 1337;
    childFive.title = "Child Five";
    return [childOne, childTwo, childThree, childFour, childFive];
  }
}
