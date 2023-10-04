/* 2023 - K2
All rights reserved. */

import { Component, OnInit } from '@angular/core';

interface Tower {
  roofAmount: number[];
}

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
  towers: Tower[] = [];
  towersAmmount = 6 - Math.floor(Math.random() * 3);
  roofsAmmount = 7;

  ngOnInit(): void {
    for (let i = 0; i < this.towersAmmount; i++) {
      const demRoofs = Math.ceil(Math.random() * this.roofsAmmount + 1);
      let roofs: number[] = [];
      for (let j = 0; j < demRoofs; j++) {
        roofs.push(j);
      }
      this.towers.push({ roofAmount: roofs });
    }
  }
}
