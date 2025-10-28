<p align="center">
  <img src="https://receitas-incriveis-wma.web.app/assets/img/logo.png" alt="Logo Receitas Incríveis" width="150"/>
</p>

<h1 align="center">
  Receitas Incríveis
</h1>

<p align="center">
  Um site de receitas moderno, interativo e totalmente responsivo, construído com componentes Web Awesome.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completo-brightgreen?style=for-the-badge" alt="Status do Projeto: Completo">
  <img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-blue?style=for-the-badge" alt="Licença MIT">
</p>

## 🚀 Demonstração ao Vivo

**[Acesse a demonstração ao vivo AQUI!](https://receitas-incriveis-wma.web.app)**

## ✨ Visão Geral do Projeto

Este projeto foi desenvolvido como um exercício prático para explorar a biblioteca de componentes **Web Awesome**, utilizando apenas HTML, CSS e JavaScript puros. O resultado é um site de receitas dinâmico, onde todo o conteúdo (receitas, chefs, dicas) é carregado a partir de um único arquivo de dados (`data.js`), tornando a manutenção e expansão do site extremamente simples.

## 📸 Screenshots

<table width="100%">
  <tr>
    <td align="center"><strong>Página Inicial</strong></td>
    <td align="center"><strong>Página da Receita</strong></td>
  </tr>
  <tr>
    <td><img src="https://receitas-incriveis-wma.web.app/assets/img/screenshot-home.png" alt="Screenshot da Página Inicial"></td>
    <td><img src="https://receitas-incriveis-wma.web.app/assets/img/screenshot-receita.png" alt="Screenshot da Página da Receita"></td>
  </tr>
  <tr>
    <td align="center"><strong>Página de Chefs</strong></td>
    <td align="center"><strong>Layout Responsivo (Mobile)</strong></td>
  </tr>
  <tr>
    <td><img src="https://receitas-incriveis-wma.web.app/assets/img/screenshot-chefs.png" alt="Screenshot da Página de Chefs"></td>
    <td><img src="https://receitas-incriveis-wma.web.app/assets/img/screenshot-mobile.png" alt="Screenshot do site em um dispositivo móvel"></td>
  </tr>
</table>

## 🎯 Funcionalidades Principais

*   🎨 **Design Moderno e Responsivo:** Layout que se adapta perfeitamente a desktops, tablets e celulares.
*   ⚙️ **Conteúdo Dinâmico:** Todas as receitas e chefs são carregados via JavaScript, facilitando a adição de novo conteúdo sem tocar no HTML.
*   🧩 **Componentes Web Awesome:** Uso de diversos componentes gratuitos como Cards, Badges, Tabs, Rating, Tooltip e Dialog para uma experiência rica.
*   ✨ **Interatividade:**
    *   **Modal de Imagem:** Clique na imagem da receita para visualizá-la em um pop-up.
    *   **Dicas Flutuantes (Tooltip):** Passe o mouse sobre as estrelas de avaliação para ver a nota exata.
    *   **Dica do Chef:** Alertas customizados com dicas especiais em cada receita.
*   🎨 **CSS Organizado com Tokens:** O `style.css` é estruturado com variáveis CSS (tokens) para cores, espaçamentos e fontes, garantindo consistência e facilitando a customização do tema.
*   📱 **Menu Mobile:** Menu de navegação funcional para telas pequenas.
*   📜 **Scrollbar Personalizada:** Barra de rolagem estilizada para combinar com a identidade visual do site.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais, sem o uso de frameworks complexos.

*   **HTML5**
*   **CSS3**
    *   Flexbox e CSS Grid para layout.
    *   Variáveis CSS (Tokens) para um design system consistente.
    *   Media Queries para responsividade.
*   **JavaScript (ES6+)**
    *   Manipulação do DOM para renderização dinâmica de conteúdo.
*   **[Web Awesome](https://webawesome.com/)**
    *   Biblioteca de Web Components para elementos de interface.

## 🚀 Como Executar o Projeto Localmente

O projeto é composto apenas por arquivos estáticos, não necessitando de um servidor ou passos de compilação.

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/seu-usuario/receitas-incriveis.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd receitas-incriveis
    ```

3.  **Abra o arquivo `index.html` no seu navegador:**
    *   Você pode simplesmente clicar duas vezes no arquivo `index.html` na sua pasta de arquivos.

E pronto! O site estará funcionando localmente.

## 📂 Estrutura de Arquivos

O projeto está organizado da seguinte forma para facilitar a manutenção:

```
.
├── index.html
├── sobre.html
├── receita.html
├── contato.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js           # O "banco de dados" do site
│   │   ├── script.js         # Scripts gerais (menu mobile)
│   │   ├── index-loader.js   # Carrega as receitas na home
│   │   ├── recipe-loader.js  # Carrega a receita específica
│   │   └── chefs-loader.js   # Carrega os chefs na página sobre
│   └── img/
│       ├── logo.png
│       ├── logo.svg
│       ├── Contact us.gif
│       └── screenshots
└── README.md
```

## ✒️ Autor

Este projeto foi desenvolvido por **Wendell Araujo Dev**.

*   **Portfólio:** **[wendell-araujo.web.app](https://wendell-araujo.web.app/)**
*   **GitHub:** **[@Wendell95Araujoo](https://github.com/Wendell95Araujo)**
*   **LinkedIn:** **[/in/wendell-araujo](linkedin.com/in/wendell-araujo/)**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
