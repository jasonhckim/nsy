const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "Company:",
      "",
      "What they need:",
      message,
    ].join("\n");

    const subject = encodeURIComponent("NSY LLC website inquiry");
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:hello@nsyllc.com?subject=${subject}&body=${encodedBody}`;
  });
}
