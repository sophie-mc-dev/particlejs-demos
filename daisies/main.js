particlesJS("particles-js", {
  particles: {
    number: {
      value: 120, 
      density: {
        enable: true,
        value_area: 800,
      },
    },

    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000",
      },
      image: {
        src: "daisy.png",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.48,
      random: true,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 15, 
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
    modes: {
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
});
