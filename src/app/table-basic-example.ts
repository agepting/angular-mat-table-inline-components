import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

export interface Element {
  Description: string;
  Value: number;
}

const ELEMENT_DATA: Element[] = [
  {Description: '1', Value: 1},
  {Description: '2', Value: 4},
  {Description: '3', Value: 6.4},
  {Description: '4', Value: 9},
  {Description: '5', Value: 10.8},
  {Description: '6', Value: 12},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  form: FormGroup;
  displayedColumns: string[] = ['Description', 'Action', 'Value'];
  dataSource = ELEMENT_DATA;

  constructor(fb: FormBuilder) {
      this.form = fb.group({
          allocate: fb.array([])
      })
  }

  increaseValue(el: Element) {
      if(el.Value < 30 && el.Value > 29) {
            el.Value = 30
      } else if(el.Value <= 29) {
        el.Value += 1;
      }
  }

    decreaseValue(el: Element) {
      if(el.Value < 1 && el.Value > 0) {
            el.Value = 0
      } else if(el.Value <= 30 && el.Value != 0) {
        el.Value -= 1;
      }
  }

  saveData() {
    //or this.dataSource.data if you are going with new MatTableDataSource()
    console.log(this.dataSource);
  }
  
  
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */