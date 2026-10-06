
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
  const installButton = document.querySelector("[data-pwa-install]");
  let installPrompt;

  if (isStandalone) document.body.classList.add("pwa-standalone");

  window.addEventListener("beforeinstallprompt", event => {
    if (isStandalone || !installButton) return;
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });

  installButton?.addEventListener("click", async () => {
    if (!installPrompt) return;
    const prompt = installPrompt;
    installPrompt = null;
    installButton.hidden = true;
    await prompt.prompt();
    await prompt.userChoice;
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    if (installButton) installButton.hidden = true;
  });

  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
      .catch(error => console.error("Influead service worker registration failed:", error));
  }

  if (isStandalone) {
    document.addEventListener("contextmenu", event => {
      if (!event.target.closest("a,button,input,textarea,select,option,label,summary,[contenteditable='true'],[role='button'],[role='link'],[role='menuitem']")) {
        event.preventDefault();
      }
    });
    document.querySelectorAll("img").forEach(image => {
      image.draggable = false;
    });
  }

  const menu = document.querySelector("[data-menu]");
  const nav = document.querySelector(".nav-links");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  const consent = document.querySelector("[data-cookie]");
  if (consent && !localStorage.getItem("cf_cookie_ok")) consent.hidden = false;
  document.querySelector("[data-cookie-accept]")?.addEventListener("click", () => {
    localStorage.setItem("cf_cookie_ok", "1");
    if (consent) consent.hidden = true;
  });
});
