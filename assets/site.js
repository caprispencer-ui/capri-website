// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Forms send through Formspree once a form ID is filled in (see README).
// Until then, people are pointed to Instagram so no message is lost.
document.querySelectorAll("form[data-formspree]").forEach((form) => {
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.action.includes("YOUR_FORM_ID")) {
      status.innerHTML =
        'This form isn\'t connected yet. Please message me on <a href="https://instagram.com/captured.by.capri">Instagram</a> for now!';
      return;
    }
    status.textContent = "Sending...";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error();
      form.reset();
      status.textContent = "Thank you! I'll be in touch soon.";
    } catch {
      status.innerHTML =
        'Something went wrong. Please try again or message me on <a href="https://instagram.com/captured.by.capri">Instagram</a>.';
    }
  });
});
