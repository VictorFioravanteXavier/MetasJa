import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const fadeIn = (delay: number) =>
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }), // Estado inicial
      animate(`{{ duration }}ms {{ delay }}ms ease`, style({ opacity: 1 })), // Animação com atraso
    ]),
]);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
    animations: [
      trigger('fadeInRightEnter', [
        state('void', style({ opacity: 0, transform: 'translate3d(100%, 0, 0)' })),
        transition(':enter', [
          animate('1s ease', style({ opacity: 1, transform: '' })),
        ]),
      ]),
      trigger('fadeInLeftEnter', [
        state('void', style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)' })),
        transition(':enter', [
          animate('1s ease', style({ opacity: 1, transform: '' })),
        ]),
      ]),
      fadeIn(1000)
    ],
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
