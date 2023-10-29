let e;const t=document.getElementsByClassName("faq__accordion");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){let e=this.nextElementSibling;if(e.style.maxHeight)e.style.maxHeight=null,this.classList.remove("active");else{// Закриваємо всі акордеони, крім поточного
let t=document.querySelectorAll(".faq__accordion.active");for(let e=0;e<t.length;e++)t[e].classList.remove("active"),t[e].nextElementSibling.style.maxHeight=null;// Відкриваємо поточний акордеон
this.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px"}});//# sourceMappingURL=index.ee171f41.js.map

//# sourceMappingURL=index.ee171f41.js.map
