const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector("lightbox");
const lightBoxImg = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn")

galleryItems.forEach(item =>{
    item.addEventListener("click", ()=>{
        lightBox.style.display = "flex";
        lightBoxImg.src = item.src;
    })
})


closeBtn.addEventListener("click", ()=>{
    lightBox.style.display = "none" /* takes us back to img gallery */
})

lightBox.addEventListener("click", ()=>{
    if (event.target === lightbox){ /* clicking the background */
    lightbox.style.display = "none"
  }
})