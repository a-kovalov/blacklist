const acc = document.getElementsByClassName("faq__accordion");
let i;
for(i = 0; i < acc.length; i++)acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) panel.style.maxHeight = null;
    else panel.style.maxHeight = panel.scrollHeight + "px";
});

//# sourceMappingURL=index.38ce58ee.js.map
