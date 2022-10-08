const headerComponentTemplate = document.createElement("sempre-viva-header-template");
headerComponentTemplate.innerHTML = `
<section class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
    <a id="logo" href="index.html">
        <img src="img/logo/Logo@0.5x-Sem-nome-ou-slogan.png" aria-label="Programa Sempre-Viva a Língua Portuguesa" />
    </a>
    <nav class="d-none d-md-block my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="index.html#project">O Programa</a>
        <a class="p-2 text-dark" href="index.html#initiatives">Nossas Vertentes</a>
        <a class="p-2 text-dark" href="index.html#team">A Equipe</a>
        <a class="p-2 text-dark" href="index.html#contact">Contato</a>
    </nav>
</section>
`;

class SempreVivaHeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.appendChild(headerComponentTemplate);
    }
}

window.customElements.define("sempre-viva-header", SempreVivaHeaderComponent);
