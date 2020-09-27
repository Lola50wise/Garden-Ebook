import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: 'Cover Page',
      url: '/cover',
      icon: 'home'
    },
    {
      title: "Chapter 1 | Plants",
      url: '/chapter1',
      icon: 'list'
    },
    {
      title: "Chapter 2 | Flowers",
      url: '/chapter2',
      icon: 'list'
    },
    {
      title: "Chapter 3 | Gates",
      url: '/chapter3',
      icon: 'list'
    },
    {
      title: "Chapter 4 | Paths",
      url: '/chapter4',
      icon: 'list'
    },
        {
      title: "Chapter 5 | Water",
      url: '/chapter5',
      icon: 'list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
