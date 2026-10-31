// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Forms email Capri through FormSubmit (see README). If anything goes wrong,
// people are pointed to Instagram so no message is lost.
const fallback =
  'Something went wrong. Please try again or message me on <a href="https://instagram.com/captured.by.capri">Instagram</a>.';

document.querySelectorAll("form[data-formsubmit]").forEach((form) => {
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending...";
    try {
      const response = await fetch(form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== "true") throw new Error();
      form.reset();
      status.textContent = "Thank you! I'll be in touch soon.";
    } catch {
      status.innerHTML = fallback;
    }
  });
});
