import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  @Input() documents: any[];

  collapsedList: String[] = [];

  ngOnInit() {

  }
  toggleState(info:String, list:any[]) {
    if(info && list && list.length) {
      if(this.collapsedList.includes(info)) {
        this.collapsedList = this.collapsedList.filter(val => val != info)
      } else {
        this.collapsedList.push(info);
      }
    }
  }

  isChildViewExists(name: String, list?: any[]) {
    return list && this.collapsedList.indexOf(name) === -1? 'fa fa-minus-square-o': 'fa fa-plus-square-o';
  }
}
