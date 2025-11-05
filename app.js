document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 }, // кількість частинок
      color: { value: "#8b5cf6" }, // колір
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8b5cf6",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: true, // магнітний ефект
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // при наведенні — частинки розлітаються
        },
        onclick: {
          enable: true,
          mode: "push" // при кліку — додаються нові частинки
        },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.5 } },
        bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
        repulse: { distance: 120, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});
