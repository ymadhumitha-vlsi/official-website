/* ==========================================================
   OPEN SIDEBAR
========================================================== */

function openMenu() {

    document.getElementById("sidebar").style.left = "0";

}


/* ==========================================================
   CLOSE SIDEBAR
========================================================== */

function closeMenu() {

    document.getElementById("sidebar").style.left = "-320px";

}


/* ==========================================================
   CLOSE MENU WHEN CLICKING A LINK
========================================================== */

const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


/* ==========================================================
   ACTIVE BUTTON EFFECT
========================================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
