import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Technopedia';
  languageDisplay: boolean = false;
  authorDisplay: boolean = false;
  @ViewChild('languageDropDown') languageDropDown!: ElementRef;
  @ViewChild('authorDropDown') authorDropDown!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
}
