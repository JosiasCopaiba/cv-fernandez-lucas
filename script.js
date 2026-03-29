// Mostrar botón cuando bajás
window.onscroll = function () {
    let btn = document.getElementById("btnTop");

    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Volver arriba
document.getElementById("btnTop").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

