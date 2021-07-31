const acordeonList = document.querySelector(".acordeon__list");

acordeonList.addEventListener("click", fn);

function fn(e) {
  if (e.target.classList[0] === "acordeon__title") {
    const classP = e.target.nextElementSibling;
    classP.classList.toggle("subtitle__hiden--visible");
  }
}
