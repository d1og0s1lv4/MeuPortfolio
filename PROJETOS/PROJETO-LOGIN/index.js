const container = document.getElementById("stars-container");
const starCount = 100; // Number of stars to create
const twinkle = 0.3; // number of stars that twinkle (30%)

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  if (Math.random() < twinkle) {
    star.classList.add("twinkle");
  }

  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  container.appendChild(star);
}
