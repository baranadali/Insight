




let navbarMenu = document.querySelector(".header-menu");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
    navbarMenu.classList.add("active-menu");
})

closeIcon.addEventListener("click", () => {
    navbarMenu.classList.remove("active-menu");
})








let header = document.querySelector(".header-section");

// window.addEventListener("scroll", function () {
//     header.classList.toggle("sticky-header", window.scrollY > 180)
// });

window.addEventListener("scroll", function(){
    navbarMenu.classList.remove("active-menu", window.scrollY > 0)
});








let pricingSection = document.querySelectorAll(".pricing-title-btn a")

pricingSection.forEach((pricingClick) => {
    pricingClick.addEventListener("click", () => {
        if (pricingClick.innerHTML === "Billied monthly") {
            let pricingMonthly = document.querySelector(".pricing-monthly").classList.add("pricing-active")
            let pricingAnnual = document.querySelector(".pricing-annual").classList.remove("pricing-active")

            let proPrice = document.querySelector(".pro-plan .plan-price")
            proPrice.innerHTML = "$ 99.99"
        }
        else if (pricingClick.innerHTML === "Billied annual") {
            let pricingAnnual = document.querySelector(".pricing-annual").classList.add("pricing-active")
            let pricingMonthly = document.querySelector(".pricing-monthly").classList.remove("pricing-active")

            let proPrice = document.querySelector(".pro-plan .plan-price")
            proPrice.innerHTML = "$ 1.199"
        }
    })
})