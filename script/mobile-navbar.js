class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();


      const Decomprimento = document.querySelector('#Decomprimento');
      const Paracomprimento = document.querySelector('#Paracomprimento');
      const unidadeOrigem = Decomprimento.value;
      const unidadeDestino = Paracomprimento.value;
      const curiosidadePeso = document.querySelector('#curiosidadePeso');
      const curiosidadeComp = document.querySelector('#curiosidadeComp');


      if (unidadeDestino === 'quilometro' || unidadeDestino === 'hectometro' || unidadeDestino === 'decametro' || unidadeDestino === 'metro' || unidadeDestino === 'decimetro' || unidadeDestino === 'centimetro' || unidadeDestino === 'milimetro') { curiosidadeComp.innerHTML = '' } 
      else if (unidadeDestino === 'quilograma' || unidadeDestino === 'hectograma' || unidadeDestino === 'decagrama' || unidadeDestino === 'grama' || unidadeDestino === 'decigrama' || unidadeDestino === 'centigrama' || unidadeDestino === 'miligrama') {  curiosidadePeso.innerHTML = '' }
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list a",
  );
  mobileNavbar.init();