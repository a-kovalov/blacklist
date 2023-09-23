const acc = document.getElementsByClassName("faq__accordion");
let i;
for(i = 0; i < acc.length; i++)acc[i].addEventListener("click", function() {
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove("active");
    } else {
        // Закриваємо всі акордеони, крім поточного
        let active = document.querySelectorAll(".faq__accordion.active");
        for(let j = 0; j < active.length; j++){
            active[j].classList.remove("active");
            active[j].nextElementSibling.style.maxHeight = null;
        }
        // Відкриваємо поточний акордеон
        this.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
});

//# sourceMappingURL=index.38ce58ee.js.map
