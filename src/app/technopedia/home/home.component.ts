import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  technologiesStack: any = [];
  constructor() {
    this.technologiesStack = [
      [
        {
          name: 'General',
        },
        {
          name: 'Programming',
        },
        {
          name: 'Human Anatomy',
        },
      ],
      [
        {
          name: 'History & Facts',
        },
        {
          name: 'Sports',
        },
        {
          name: 'Gaming',
        },
      ],
      [
        {
          name: 'New Born',
        },
        {
          name: 'Electronics',
        },
        {
          name: 'Science',
        },
      ],
    ];
  }

  ngOnInit(): void {}
}
