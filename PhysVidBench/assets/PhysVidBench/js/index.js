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

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("video[autoplay] source[data-src]").forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute("data-src");
      source.parentElement.load();
    });
    return;
  }

  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          const source = video.querySelector("source[data-src]");
          if (source) {
            source.src = source.dataset.src;
            source.removeAttribute("data-src");
            video.load();
          }

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
