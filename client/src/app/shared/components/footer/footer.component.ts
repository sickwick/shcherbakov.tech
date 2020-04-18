import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  vkLogo: 'assets/icons/vk.svg';
  instagramLogo: 'assets/instagram.png';
  githubLogo: 'assets/GitHub_Logo.png';

  constructor() { }

  ngOnInit(): void {

  }

}
