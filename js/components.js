class Header extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>

      :host {
          display: block;
          width: 100%
      }

      header {
          border-bottom: 3px solid var(--act);
          padding: 3em;
          text-align: center;
      }

      header h1 {
          font-family: var(--font-act);
          font-weight: 700;
      }

      header p {
          font-style: italic;
          font-family: var(--font-main);
      }
      </style>

      <header>
          <h1>Flashcard PWA</h1>
          <p>
              Personal project to learn more about JavaScript and PWAs ·
              Currently W.I.P.
          </p>
      </header>

      `;
  }
}

customElements.define("page-header", Header);

class Footer extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>

      :host {
          display: block;
          width: 100%
      }

      footer {
          background-color: var(--bg-dark);
          color: var(--txt-dark);
          height: 25vh;
          padding: 2rem;
          justify-items: center;
          margin-top: 25vh;
      }

      footer a {
          color: var(--act);
          text-align: center;
          text-decoration: none;
      }

      </style>

      <footer>
          <p>
              Made with love by
              <a href="https://gaspard-lb.web.app/" target="_blank"
                  >Gaspard Le Borgne</a
              >, AI free
          </p>
      </footer>
      `;
  }
}

customElements.define("page-footer", Footer);

/* CARD ELEMENT */

class Flashcard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../style/cards.css" />

      <div class="card">
          <p class="recto"><slot name="recto"></slot></p>
          <p class="verso hide"><slot name="verso"></slot></p>
          <span class="turn">Cliquer pour révéler</span>
      </div>
      `;

    const turns = this.shadowRoot.querySelectorAll(".turn");
    const recto = this.shadowRoot.querySelectorAll(".recto");
    const verso = this.shadowRoot.querySelectorAll(".verso");

    for (let i = 0; i < turns.length; i++) {
      turns[i].addEventListener("click", function () {
        recto[i].classList.toggle("hide");
        verso[i].classList.toggle("hide");
      });
    }
  }
}

customElements.define("flash-card", Flashcard);
