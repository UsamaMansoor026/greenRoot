const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  if (navMenu.classList.contains("open")) {
    hamburger.innerText = "X";
  } else {
    hamburger.innerText = "☰";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat h3");

  const speed = 70; // Lower = faster

  const animateCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;

        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          if (!counter.classList.contains("counted")) {
            counter.classList.add("counted");
            animateCounter(counter);
          }
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  counters.forEach((counter) => observer.observe(counter));
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon. 🌿");
    this.reset();
  });
