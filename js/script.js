/* MENU BUTTON */
const $menuButton = document.querySelector(".menu-button")
const $mainNav = document.querySelector(".main-nav")

$menuButton.addEventListener("click", () => {
   $mainNav.classList.toggle("-active")
   $menuButton.classList.toggle("-active")
})

/* FOOTER SITEMAP BUTTON */
const $sitemapButton = document.querySelectorAll(".sitemap-button")

function selectButton() {
   let $sitemapActive = this
   $sitemapActive.classList.toggle("-active")
}

$sitemapButton.forEach((buttonItem) => {
   buttonItem.addEventListener("click", selectButton)
})