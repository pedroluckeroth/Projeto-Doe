const rootPath = document.body.dataset.root || "../..";
const currentPage = document.body.dataset.page || "home";

const navigation = [
  ["home", "Início", `${rootPath}/codigo/home/home.html`],
  ["sobre", "Sobre o projeto", `${rootPath}/codigo/sobre/sobre.html`],
  ["informacoes", "Como doar", `${rootPath}/codigo/informacoes/informacoes.html`],
  ["contato", "Contato", `${rootPath}/codigo/contato/contato.html`]
];

const header = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="${rootPath}/codigo/home/home.html" aria-label="Doe+ - página inicial">
        <img src="${rootPath}/assets/logo.png" alt="">
        <span>Doe+</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
      <nav aria-label="Navegação principal">
        <ul class="nav-links">
          ${navigation.map(([id, label, href]) => `<li><a href="${href}" ${currentPage === id ? 'aria-current="page"' : ""}>${label}</a></li>`).join("")}
          <li><a class="nav-cta" href="${rootPath}/codigo/contato/contato.html">Fale com a gente</a></li>
        </ul>
      </nav>
    </div>
  </header>`;

const footer = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div><a class="brand" href="${rootPath}/codigo/home/home.html"><span style="color:white">Doe+</span></a><p>Informação que aproxima. Solidariedade que transforma.</p></div>
      <div class="footer-links">
        <a href="${rootPath}/codigo/informacoes/informacoes.html">Orientações para doar</a>
        <a href="${rootPath}/codigo/sobre/sobre.html">Sobre</a>
        <a href="${rootPath}/codigo/contato/contato.html">Contato</a>
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

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = form.dataset.success || "Mensagem validada. Para receber e armazenar dados, este projeto precisa de um serviço de backend.";
      message.classList.add("show");
    }
    form.reset();
  });
});
