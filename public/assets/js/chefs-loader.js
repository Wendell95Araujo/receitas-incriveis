document.addEventListener("DOMContentLoaded", () => {
  const chefsGrid = document.getElementById("chefs-grid");
  const loader = document.getElementById("loader");
  if (!chefsGrid) return;

  chefs.forEach((chef) => {
    const cardHtml = `
            <wa-card class="chef-card">
                <wa-avatar size="xl" style="margin-top: 20px;" image="${chef.avatarImage}" label="${chef.nome}"></wa-avatar>
                <div class="recipe-card-content">
                    <h3>${chef.nome}</h3>
                    <p>${chef.bio}</p>
                </div>
            </wa-card>
        `;
    chefsGrid.innerHTML += cardHtml;
  });
  loader.classList.add("hidden");
  chefsGrid.classList.remove("hidden");
});
