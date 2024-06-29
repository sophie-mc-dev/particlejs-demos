particlesJS("particles-js", {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 790,
      },
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000",
      },
      image: {
        src: "snowflake.png",
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
      value: 10,
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
        distance: 83,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
});
