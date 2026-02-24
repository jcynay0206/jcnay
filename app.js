document.getElementById("leadForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/mkovpewz", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    document.getElementById("successMessage").classList.remove("hidden");
    form.reset();
  }
});
