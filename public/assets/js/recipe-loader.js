document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  if (!recipeId) {
    document.getElementById("recipe-content").innerHTML =
      "<h1>Receita não encontrada!</h1>";
    return;
  }

  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    document.getElementById(
      "recipe-content"
    ).innerHTML = `<h1>Receita com ID "${recipeId}" não encontrada!</h1>`;
    return;
  }

  document.title = recipe.titulo;
  document.getElementById("recipe-title").textContent = recipe.titulo;
  const recipeImage = document.getElementById("recipe-image");
  recipeImage.src = recipe.imagem;
  recipeImage.alt = recipe.titulo;

  const infoContainer = document.getElementById("recipe-info");
  infoContainer.innerHTML = "";

  const badgeDificuldade = document.createElement("wa-badge");
  badgeDificuldade.variant = "success";
  badgeDificuldade.textContent = recipe.dificuldade;
  infoContainer.appendChild(badgeDificuldade);

  const badgeTempo = document.createElement("wa-badge");
  badgeTempo.variant = "neutral";
  badgeTempo.innerHTML = `<wa-icon name="clock"></wa-icon> ${recipe.tempo}`;
  infoContainer.appendChild(badgeTempo);

  const ratingContainer = document.createElement("div");
  ratingContainer.id = "rating-container";
  ratingContainer.style.display = "flex";
  ratingContainer.style.alignItems = "center";

  const ratingElement = document.createElement("wa-rating");
  ratingElement.value = recipe.rating;
  ratingElement.precision = "0.5";
  ratingElement.readonly = true;

  const tooltipElement = document.createElement("wa-tooltip");
  tooltipElement.setAttribute("for", "rating-container");
  tooltipElement.setAttribute("placement", "bottom");
  tooltipElement.textContent = `Avaliação: ${recipe.rating} de 5 estrelas`;

  ratingContainer.appendChild(ratingElement);
  ratingContainer.appendChild(tooltipElement);

  infoContainer.appendChild(ratingContainer);

  const reviewsSpan = document.createElement("span");
  reviewsSpan.textContent = `(${recipe.avaliacoes} avaliações)`;
  infoContainer.appendChild(reviewsSpan);

  const ingredientsList = document.getElementById("recipe-ingredients");
  recipe.ingredientes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("recipe-steps");
  recipe.preparo.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    stepsList.appendChild(li);
  });

  if (recipe.dica) {
    const tabGroup = document.querySelector("wa-tab-group");
    const alertHtml = `
        <div class="custom-alert">
            <wa-icon name="lightbulb"></wa-icon>
            <div>
                <strong>Dica do Chef:</strong><br>
                ${recipe.dica}
            </div>
        </div>
    `;

    tabGroup.insertAdjacentHTML("afterend", alertHtml);
  }

  const mainImage = document.getElementById("recipe-image");
  const dialog = document.getElementById("image-dialog");
  const dialogImage = document.getElementById("dialog-image");

  mainImage.style.cursor = "zoom-in";

  mainImage.addEventListener("click", () => {
    dialogImage.src = mainImage.src;

    dialog.show();
  });
});
