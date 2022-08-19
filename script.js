window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollY > 0) {
    navbar.style.height = "50px";
    imgImprovise.classList.add("show-img");
  } else {
    navbar.style.height = "90px";
  }
  if (scrollValue > 0.85) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0px)";
  }
});

closeBtn.addEventListener("click", () => {
  popup.remove();
});
