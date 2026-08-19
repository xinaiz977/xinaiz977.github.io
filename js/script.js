// Powers the left/right arrow buttons on any .carousel section.
// Each click scrolls the track by roughly one screen's worth of items.
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const prevBtn = carousel.querySelector(".carousel-btn-prev");
  const nextBtn = carousel.querySelector(".carousel-btn-next");

  if (!track || !prevBtn || !nextBtn) return;

  const scrollDistance = () => track.clientWidth * 0.9;

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollDistance(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollDistance(), behavior: "smooth" });
  });
});
