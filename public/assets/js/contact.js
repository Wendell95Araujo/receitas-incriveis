document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('wa-input[name="name"]').value?.trim() || "";
    const email = form.querySelector('wa-input[name="email"]').value?.trim() || "";
    const subject = form.querySelector('wa-select[name="subject"]').value || "";
    const message = form.querySelector('wa-textarea[name="message"]').value?.trim() || "";

    if (!name || !email || !subject || !message) {
      alertBox.classList.remove("hidden");
      alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    alertBox.classList.add("hidden");
    console.log("✅ Mensagem enviada com sucesso!");
  });
});
