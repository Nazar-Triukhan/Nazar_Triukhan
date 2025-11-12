document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 120 },
      color: { value: ["#2563EB", "#7C3AED"] }, // синьо-фіолетовий мікс
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#2563EB",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.5 } },
        bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});
