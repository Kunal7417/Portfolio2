/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json):  */


particlesJS('particles-js', {
  particles: {
    number: {
      value: 50, // Total particles
      density: {
        enable: true,
        value_area: 700, // Density area
      },
    },
    color: {
      value: ["#ff6f61", "#6b5b95", "#88b04b"], // Array of custom colors
    },
    shape: {
      type: ["circle", "triangle", "star"], // Mix of shapes
      stroke: {
        width: 1,
        color: "#ffffff", // Outline color
      },
    },
    opacity: {
      value: 0.8,
      random: true, // Random opacity for variety
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 2,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out", // Particles move outside the canvas area
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble", // Particles grow when hovered
      },
      onclick: {
        enable: true,
        mode: "remove", // Particles are removed on click
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 0.8,
        },
      },
      bubble: {
        distance: 200,
        size: 15, // Bubble size
        duration: 1,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.5,
      },
      push: {
        particles_nb: 5, // Number of particles pushed
      },
      remove: {
        particles_nb: 2, // Number of particles removed
      },
    },
  },
  retina_detect: true,
});
