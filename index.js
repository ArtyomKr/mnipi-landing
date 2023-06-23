function reveal(classname, offset) {
  const hiddenSections = document.querySelectorAll(`.${classname}`);

  hiddenSections.forEach((hiddenEl) => {
    const hiddenElTop = hiddenEl.getBoundingClientRect().top;

    if (window.innerHeight - offset > hiddenElTop) {
      hiddenEl.classList.add(`${classname}_revealed`);
    }
  });
}

window.addEventListener("scroll", () => reveal("product", 150));

reveal("product", 150);

const verticalText = document.querySelector('.poster-sides__text_bottom');
const body = document.querySelector('.body');

const resizeObserver = new ResizeObserver((elems) => {
  console.log(elems);
  for (const el of elems) {
    const height = el.contentBoxSize[0].blockSize;
    verticalText.style.height = height - 20 + 'px';
  }
});

resizeObserver.observe(body);