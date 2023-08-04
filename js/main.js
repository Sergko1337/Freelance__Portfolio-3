const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block:"start"
    })
  })
}


document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -.012 }deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * -.012 }deg;
    `
  })
})
