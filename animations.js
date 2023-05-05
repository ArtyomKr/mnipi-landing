function reveal(classname, offset) {
  const hiddenSections = document.querySelectorAll(`.${classname}`);

  hiddenSections.forEach((hiddenEl) => {
    const hiddenElTop = hiddenEl.getBoundingClientRect().top;

    if (window.innerHeight - offset > hiddenElTop) {
      hiddenEl.classList.add(`${classname}_revealed`);
    }
  })
}

window.addEventListener("scroll", () => reveal("product", 150));

reveal("product", 150);