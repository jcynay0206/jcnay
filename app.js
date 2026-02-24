document.getElementById("leadForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch("https://forminit.com/f/bvjr6mmg48d", {
    method: "POST",
    body: data
  });

  if (response.ok) {
    document.getElementById("successMessage").classList.remove("hidden");
    form.reset();
  }
});
