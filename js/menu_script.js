( 
  ()=> {
  const buttonMenuToggle = document.querySelector('.btn-menu-toggle');
  const siteNavList = document.querySelector('.site-nav__list');
  
  buttonMenuToggle.addEventListener('click',() => {
    siteNavList.classList.toggle('site-nav__list--visible');
    });
  
  }
)();

