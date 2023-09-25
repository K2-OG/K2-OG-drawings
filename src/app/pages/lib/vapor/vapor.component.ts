/* 2023 - K2
All rights reserved. */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-vapor',
  templateUrl: './vapor.component.html',
  styleUrls: [
    './vapor.component.scss',
    './buildings.scss',
    './grain.scss',
    './grid.scss',
    './stars.scss',
    './sun.scss',
  ],
})
export class VaporPageComponent implements OnInit {
  towers: number[] = [];
  towersAmmount = 4;

  ngOnInit(): void {
    for (let i = 0; i < this.towersAmmount; i++) {
      this.towers.push(i);
    }
  }
}
