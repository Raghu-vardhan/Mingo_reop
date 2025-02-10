const partners = document.querySelectorAll(".partner");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  partners.forEach((partner) => {
    // add data-animated="true" to every `.partner` on the page
    partner.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller__inner`
    const scrollerInner = partner.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    
    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller__inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}