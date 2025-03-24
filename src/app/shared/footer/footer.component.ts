import { Component, OnInit } from '@angular/core';
import { SrvRecord } from 'dns';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public links_uteis: Array<{path: string, name: string}> = [
    {path: '', name: 'Sobre nós'},
    {path: '', name: 'Blog'},
    {path: '', name: 'Carreiras'}
  ]

  public suporte: Array<{path: string, name: string}> = [
    {path: '', name: 'Ajuda'},
    {path: '', name: 'FAQ'},
    {path: '', name: 'Contato'}
  ] 

  public redes_sociais: Array<{path: string, icon_img: string, site_name: string}> = [
    {path: '', icon_img:'./assets/redes_sociais_icons/facebook.svg', site_name: 'facebook'},
    {path: '', icon_img:'./assets/redes_sociais_icons/twiter.svg', site_name: 'twiter'},
    {path: '', icon_img:'./assets/redes_sociais_icons/instagram.svg', site_name: 'instagram'},
    {path: '', icon_img:'./assets/redes_sociais_icons/linkedin.svg', site_name: 'linkedin'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
