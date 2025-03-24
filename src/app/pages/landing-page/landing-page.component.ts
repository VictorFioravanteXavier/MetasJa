import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public funcionalidades: Array<{img: string, name: string, text: string}> = [
    {
      img: '/assets/img_cards_landing-page/img1.svg',
      name: "Crie suas metas",
      text: "Adicione metas facilmente com nosso editor intuitivo"
    },
    {
      img: '/assets/img_cards_landing-page/img2.svg',
      name: "Organize por categorias",
      text: "Separe suas metas por áreas da vida"
    },
    {
      img: '/assets/img_cards_landing-page/img3.svg',
      name: "Acompanhe seu progresso",
      text: "Visualize e celebre suas conquistas"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
