import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
