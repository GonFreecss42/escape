window.onload = () => {
  // ссылки которые в футере и в хедере
  const menuLinks = document.querySelectorAll(".header__menu__link, .footer__menu__link");

  for (const link of menuLinks) {
    // это айдишник блока
    const sectionID = link.getAttribute("href").replace("#", "");
    const section = document.getElementById(sectionID);
    // а здесь клик на ссылку меню футере и в хедере
    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
};