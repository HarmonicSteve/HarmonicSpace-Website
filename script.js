document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const copyEmail = document.getElementById("copyEmail");
  const form = document.getElementById("consultationForm");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (copyEmail) {
    copyEmail.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("Contact@harmonicspacellc.com");
        copyEmail.textContent = "Email Copied";
        setTimeout(() => {
          copyEmail.textContent = "Copy Email";
        }, 1800);
      } catch {
        window.location.href = "mailto:Contact@harmonicspacellc.com";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const subject = encodeURIComponent("HarmonicSpace Consultation Request");

      const body = encodeURIComponent(
`Name: ${formData.get("name") || ""}
Email: ${formData.get("email") || ""}
Phone: ${formData.get("phone") || ""}
Project Address or City: ${formData.get("location") || ""}
Project Type: ${formData.get("projectType") || ""}
Preferred Contact Method: ${formData.get("preferredContact") || ""}
Ideal Timeframe: ${formData.get("timeframe") || ""}

Project Description:
${formData.get("description") || ""}`
      );

      window.location.href = `mailto:Contact@harmonicspacellc.com?subject=${subject}&body=${body}`;
    });
  }
});
