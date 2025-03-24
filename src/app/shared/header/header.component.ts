import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // Defina a animação fadeInRight
    trigger('fadeInRightEnter', [
      state('void', style({ opacity: 0, transform: 'translate3d(100%, 0, 0)' })),
      transition(':enter', [
        animate('1s ease', style({ opacity: 1, transform: '' })),
      ]),
    ]),
    trigger('fadeInLeftLeave', [
      state('void', style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)' })),
      transition(':leave', [
        animate('1s ease', style({ opacity: 1, transform: '' })),
      ]),
    ]),
    trigger('fadeInLeftEnter', [
      state('void', style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)' })),
      transition(':enter', [
        animate('1s ease', style({ opacity: 1, transform: '' })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {

  public isElementVisible: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.isElementVisible = !this.isMobileDevice()
  }


  public navegation: Array<{ path: string, nome: string }> = [
    { path: '', nome: 'Inicio' },
    { path: '', nome: 'Recursos' },
    { path: '', nome: 'Preços' },
    { path: '', nome: 'Contato' },
  ]


  // Função para detectar dispositivos móveis
  isMobileDevice(): boolean {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isUserAgentMobile = mobileRegex.test(navigator.userAgent);

    const mobileBreakpoint = 768;
    const isScreenMobile = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches;

    return isUserAgentMobile || isScreenMobile;
  }

  showElement() {
    this.isElementVisible = !this.isElementVisible
  }
}
