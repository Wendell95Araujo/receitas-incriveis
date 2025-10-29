document.addEventListener("DOMContentLoaded", () => {
  const recipeGrid = document.getElementById("recipe-grid");
  const loader = document.getElementById("loader");
  if (!recipeGrid) return;

  recipes.forEach((recipe) => {
    const chef = chefs.find((c) => c.id === recipe.chefId);
    if (!chef) return;

    const cardHtml = `
            <wa-card class="recipe-card" onclick="window.location.href='receita.html?id=${recipe.id}';">
                <img src="${recipe.imagens[0]}" alt="${recipe.titulo}">
                <div class="recipe-card-content">
                    <h3>${recipe.titulo}</h3>
                    <p>${recipe.descricao}</p>
                </div>
                <div class="recipe-card-footer">
                    <wa-avatar size="sm" image="${chef.avatarImage}" label="${chef.nome}"></wa-avatar>
                    <span>Por ${chef.nome}</span>
                </div>
            </wa-card>
        `;
    recipeGrid.innerHTML += cardHtml;
  });

  const images = recipeGrid.querySelectorAll("img");
  const imagePromises = Array.from(images).map(
    (img) =>
      new Promise((resolve) => {
        if (img.complete) resolve();
        else {
          img.onload = img.onerror = resolve;
        }
      })
  );

  Promise.all(imagePromises).then(() => {
    loader.classList.add("hidden");
    recipeGrid.classList.remove("hidden");
  });
});
