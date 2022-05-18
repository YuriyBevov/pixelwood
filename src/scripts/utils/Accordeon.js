class Accordeon {
  constructor( sel, options = {} ) {
      this.isCollapse = options.isCollapse ? options.isCollapse : false;
      this.accordeon = typeof(sel) === 'object' ? sel : document.querySelector(sel); // могу передавать как класс элемента, так и сам элемент
      this.heads = this.accordeon.querySelectorAll('.accordeon-head');
      this.bodyes = this.accordeon.querySelectorAll('.accordeon-body');
      this.init();
  }

  init() {
      this.heads.forEach(head => {
          head.addEventListener('click', (evt) => {
              if(this.isCollapse) {
                  this.bodyes.forEach(b => {
                      b.classList.contains('js-opened') ?
                      b.classList.remove('js-opened') : null;
                  })
                  this.heads.forEach(h => {
                      h.classList.contains('js-active') ?
                      h.classList.remove('js-active') : null;
                  })
              }

              let active = evt.currentTarget;
              active.classList.toggle('js-active');
              active.nextElementSibling.classList.toggle('js-opened');
          });
      })
  };
}

export { Accordeon };
