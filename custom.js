const progressBars = document.querySelectorAll('.progress');

progressBars.forEach(bar => {
  setTimeout(() => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`
  }, 1000);
});