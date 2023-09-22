/* 2023 - K2
All rights reserved. */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.scss'],
})
export class SandwichPageComponent implements OnInit {
  ngOnInit(): void {
    const el = document.querySelector('.btn');
    if (el) {
      el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
          el.classList.add('disable');
        } else {
          el.classList.remove('disable');
          el.classList.add('active');
        }
      });
    }
  }
}
