document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const contentWrapper = document.getElementById("recipe-content-wrapper");

  function setMetaTag(property, content) {
    let element =
      document.querySelector(`meta[name="${property}"]`) ||
      document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement("meta");
      if (property.startsWith("og:") || property.startsWith("twitter:")) {
        element.setAttribute("property", property);
      } else {
        element.setAttribute("name", property);
      }
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  }

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");
  const mainContent = document.querySelector("main");

  if (!recipeId) {
    mainContent.innerHTML = "<h1>Receita não encontrada!</h1>";
    return;
  }

  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    mainContent.innerHTML = `<h1>Receita com ID "${recipeId}" não encontrada!</h1>`;
    return;
  }

  const pageImage = new URL(recipe.imagens[0], window.location.href).href;
  const pageTitle = `${recipe.titulo} | Receitas Incríveis`;
  const pageDescription = `Aprenda a fazer ${
    recipe.titulo
  }. Uma receita ${recipe.dificuldade.toLowerCase()} que fica pronta em ${
    recipe.tempo
  }. Veja os ingredientes e o modo de preparo.`;
  const pageUrl = window.location.href;

  document.title = pageTitle;

  setMetaTag("description", pageDescription);
  setMetaTag("og:title", pageTitle);
  setMetaTag("og:description", pageDescription);
  setMetaTag("og:image", pageImage);
  setMetaTag("og:url", pageUrl);
  setMetaTag("twitter:title", pageTitle);
  setMetaTag("twitter:description", pageDescription);
  setMetaTag("twitter:image", pageImage);
  setMetaTag("twitter:url", pageUrl);

  document.getElementById("recipe-title").textContent = recipe.titulo;
  const recipeImage = document.getElementById("recipe-image");
  recipeImage.src = recipe.imagens[0];
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
  ingredientsList.innerHTML = "";
  recipe.ingredientes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("recipe-steps");
  stepsList.innerHTML = "";
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

    const oldAlert = document.querySelector(".custom-alert");
    if (oldAlert) oldAlert.remove();

    tabGroup.insertAdjacentHTML("afterend", alertHtml);
  }

  const mainImageContainer = document.getElementById("main-image-container");
  const openGalleryBtn = document.getElementById("open-gallery-btn");
  const dialog = document.getElementById("image-dialog");
  const carousel = document.getElementById("image-carousel");
  const thumbnailScroller = document.getElementById("thumbnail-scroller");

  function openGallery() {
    carousel.innerHTML = ''; 

    recipe.imagens.forEach((imgPath, index) => {
      const carouselItem = document.createElement('wa-carousel-item');
      const imgElement = document.createElement('img');
      imgElement.src = imgPath;
      imgElement.alt = `${recipe.titulo} - Imagem ${index + 1}`;
      carouselItem.appendChild(imgElement);
      carousel.appendChild(carouselItem);

      const thumbElement = document.createElement('img');
      thumbElement.src = imgPath;
      thumbElement.alt = `Miniatura ${index + 1}`;
      thumbElement.classList.add('thumbnail-image');

      if (index === 0) {
        thumbElement.classList.add('active');
      }
      thumbnailScroller.appendChild(thumbElement);
    });

    dialog.show();
  }

  mainImageContainer.addEventListener("click", openGallery);
  openGalleryBtn.addEventListener("click", openGallery);

  thumbnailScroller.addEventListener("click", (e) => {
    if (e.target.matches(".thumbnail-image")) {
      const thumbnails = thumbnailScroller.querySelectorAll(".thumbnail-image");
      const index = Array.from(thumbnails).indexOf(e.target);
      carousel.goToSlide(index);
    }
  });

  carousel.addEventListener("wa-slide-change", (e) => {
    const slideIndex = e.detail.index;
    const thumbnails = thumbnailScroller.querySelectorAll(".thumbnail-image");

    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === slideIndex);
      if (i === slideIndex) {
        thumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  });

  loader.classList.add("hidden");
  contentWrapper.classList.remove("hidden");
});
