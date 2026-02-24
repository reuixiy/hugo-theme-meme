const updateReadingProgress = () => {
  const progressBar = document.querySelector("#reading-progress");

  if (!progressBar) {
    return;
  }

  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  if (scrollHeight <= 0) {
    progressBar.style.width = "0%";
    return;
  }

  const scrollPercent = (window.scrollY / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", updateReadingProgress);
  updateReadingProgress();
});
