const rootPath = document.body.dataset.root || ".";
const currentPage = document.body.dataset.page || "home";

const navigation = [
  ["home", "Início", "/"],
  ["sobre", "Sobre o projeto", "/sobre"],
  ["como-doar", "Como doar", "/como-doar"],
  ["contato", "Contato", "/contato"]
];

const header = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="/" aria-label="Doe+ - página inicial">
        <img src="${rootPath}/assets/logo.png" alt="Doe+">
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
      <nav aria-label="Navegação principal">
        <ul class="nav-links">
          ${navigation.map(([id, label, href]) => `<li><a href="${href}" ${currentPage === id ? 'aria-current="page"' : ""}>${label}</a></li>`).join("")}
        </ul>
      </nav>
    </div>
  </header>`;

const footer = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="footer-brand" href="/">Doe<span>+</span></a>
        <p>Portal informativo sobre doação de sangue e encaminhamento para hemocentros oficiais.</p>
      </div>
      <div class="footer-links">
        <a href="/como-doar">Como doar</a>
        <a href="/sobre">Sobre o projeto</a>
        <a href="/contato">Contato</a>
        <a href="https://www.hemominas.mg.gov.br/" target="_blank" rel="noopener">Hemominas ↗</a>
        <a href="https://www.gov.br/saude/pt-br/composicao/saes/doacao-de-sangue/faq" target="_blank" rel="noopener">Ministério da Saúde ↗</a>
      </div>
    </div>
  </footer>`;

document.querySelector("#site-header")?.insertAdjacentHTML("afterbegin", header);
document.querySelector("#site-footer")?.insertAdjacentHTML("afterbegin", footer);

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
