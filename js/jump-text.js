document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    document.getElementById("jump-title")
  ].filter(Boolean); 

  titles.forEach((title) => {
    const letters = title.textContent.split("");
    title.textContent = "";

    letters.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      title.appendChild(span);
    });

    const spans = title.querySelectorAll("span");
    let i = 0;

    function jump() {
      const span = spans[i];
      span.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-10px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: 800,
          easing: "ease-in-out",
        }
      );

      i = (i + 1) % spans.length;
      setTimeout(jump, 100);
    }

    jump();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    document.getElementById("jump-text")
  ].filter(Boolean); 

  titles.forEach((title) => {
    const letters = title.textContent.split("");
    title.textContent = "";

    letters.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      title.appendChild(span);
    });

    const spans = title.querySelectorAll("span");
    let i = 0;

    function jump() {
      const span = spans[i];
      span.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-5px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: 900,
          easing: "ease-in-out",
        }
      );

      i = (i + 1) % spans.length;
      setTimeout(jump, 300);
    }

    jump();
  });
});
