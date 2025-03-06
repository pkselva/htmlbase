// JavaScript for Smooth Animations and Navigation
document.addEventListener("DOMContentLoaded", () => {
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const navMenu = document.querySelector(".nav_menu");
    const navContainer = document.querySelector(".nav_container");
    const nav = document.querySelector("nav");
    // Toggle navigation menu
    openMenuBtn.addEventListener("click", () => {
        navMenu.style.transform = "translateX(0)";
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "block";
    });

    closeMenuBtn.addEventListener("click", () => {
        navMenu.style.transform = "translateX(-100%)";
        closeMenuBtn.style.display = "none";
        openMenuBtn.style.display = "block";
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav_menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

        //      let lastScrollY = window.scrollY;
             
        // window.addEventListener("scroll", () => {
        //     if (window.scrollY > lastScrollY) {
        //         // Scrolling down
        //         nav.style.transform = "translateY(-100%)";
        //         nav.style.transition = "all 0.3s ease";
        //         // nav.style.display ='none';
        //     } else {
        //         // Scrolling up
        //         nav .style.transform = "translateY(0)";
        //         // nav.style.display ='flex';
        //         nav.style.transition = "all 0.3s ease";
        //     }
        //     lastScrollY = window.scrollY;
        // });
        
        // window.addEventListener("mouseover", () => {
        //     nav.style.transform = "translateY(-100%)";
        //     nav.style.transition = "all 0.3s ease";
        //     console.log('Hello World');
        //             })
        //  nav.addEventListener("mouseout", () => {
        //     nav.style.transform = "translateY(0%)";
        //     nav.style.transition = "all 0.3s ease";console.log('World');
        //             })

});
