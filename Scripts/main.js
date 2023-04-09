let cards = document.querySelectorAll(".faq-card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    if (card.children[2].classList.contains("show")) {
      card.children[1].classList.remove("toggle-up");
      card.children[1].classList.add("toggle-down");
      card.children[2].classList.toggle("show");
    } else {
      card.children[1].classList.remove("toggle-down");
      card.children[1].classList.add("toggle-up");
      card.children[2].classList.toggle("show");
    }
  });
});
