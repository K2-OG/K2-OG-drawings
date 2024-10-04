/* 2023 - K2
All rights reserved. */

import { Component, OnInit } from '@angular/core';

interface Tower {
  roofAmount: number[];
}

@Component({
  selector: 'page-grow',
  templateUrl: './grow.component.html',
  styleUrls: ['./grow.component.scss'],
})
export class GrowPageComponent implements OnInit {
  towers: Tower[] = [];
  towersAmmount = 9;
  roofsAmmount = 7;

  ngOnInit(): void {
    for (let i = 0; i < this.towersAmmount; i++) {
      const demRoofs = this.roofsAmmount;
      let roofs: number[] = [];
      for (let j = 0; j < demRoofs; j++) {
        roofs.push(j);
      }
      this.towers.push({ roofAmount: roofs });
    }
  }
}
