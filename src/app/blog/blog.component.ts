import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild("carousel") carousel: ElementRef;
  anoAtual: number;

  constructor() {
  }
  
  ngOnInit() {
    this.anoAtual = new Date().getFullYear();
    $(this.carousel.nativeElement).carousel();
  }

}
