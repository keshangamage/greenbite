document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  initHamburgerMenu();

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const responseElement = document.getElementById("formResponse");

    if (isFormValid(name, email, subject, message)) {
      saveFeedback(name, email, subject, message);

      showSuccessMessage(responseElement);

      contactForm.reset();
    } else {
      showErrorMessage(
        responseElement,
        "⚠️ Please fill in all fields correctly."
      );
    }
  });
});

function isFormValid(name, email, subject, message) {
  if (!name || !email || !subject || !message) {
    return false;
  }

  if (!isValidEmail(email)) {
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function saveFeedback(name, email, subject, message) {
  const feedback = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    date: new Date().toLocaleString(),
  };

  let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

  feedbackList.push(feedback);

  localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

  console.log("Feedback saved:", feedback);
}

function showSuccessMessage(element) {
  element.textContent =
    "✅ Thank you! Your message has been submitted successfully.";
  element.style.color = "#38a169";
  element.style.background = "#c6f6d5";
  element.style.padding = "10px";
  element.style.borderRadius = "5px";
  element.style.marginTop = "10px";
}

function showErrorMessage(element, message) {
  element.textContent = message;
  element.style.color = "#e53e3e";
  element.style.background = "#fed7d7";
  element.style.padding = "10px";
  element.style.borderRadius = "5px";
  element.style.marginTop = "10px";
}

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    const isOpen = this.classList.contains("active");

    closeAllAccordions();

    if (!isOpen) {
      this.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function closeAllAccordions() {
  accordionButtons.forEach(function (button) {
    button.classList.remove("active");
    const content = button.nextElementSibling;
    content.style.maxHeight = null;
  });
}

// Hamburger menu
(function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
})();
