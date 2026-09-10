window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  bulmaCarousel.attach(".carousel", {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  });

  function loadVideo(video) {
    const source = video.querySelector("source[data-src]");
    if (!source) {
      return;
    }

    source.src = source.dataset.src;
    source.removeAttribute("data-src");
    video.load();
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("video[autoplay]").forEach((video) => {
      loadVideo(video);
    });
    return;
  }

  const carousel = document.getElementById("results-carousel-face");
  if (carousel) {
    const carouselObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        carousel.querySelectorAll("video[autoplay]").forEach((video) => {
          loadVideo(video);
        });
        observer.unobserve(carousel);
      },
      { rootMargin: "600px 0px" },
    );

    carouselObserver.observe(carousel);
  }

  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          loadVideo(video);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { rootMargin: "300px 0px" },
  );

  document.querySelectorAll("video[autoplay]").forEach((video) => {
    videoObserver.observe(video);
  });
});
