const fullScreen = document.getElementById("full-screen");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target === container2 && entry.isIntersecting) {
        fullScreen.style.backgroundColor = "blue";
      } else if (entry.target === container1 && entry.isIntersecting) {
        fullScreen.style.backgroundColor = "orange";
      }
    });
  },
  {
    root: document.querySelector("#full-screen"),
    threshold: 0.5,
  }
);

observer.observe(container1);
observer.observe(container2);
