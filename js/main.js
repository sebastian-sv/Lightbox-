const images = document.querySelectorAll(".image img");
const lightBox = document.querySelector(".light-box");
const boxImage = document.querySelector(".box-image");
const imageResult = document.getElementById("image-result");
const previusImage = document.getElementById("previous-image");
const nextImage = document.getElementById("next-image");
let indiceImagen = 0;

images.forEach((image)=>{
  image.addEventListener("click",(e)=>{
    lightBox.classList.add("active");
    indiceImagen = Array.from(images).indexOf(event.target);
    boxImage.addEventListener("click",(e)=>{
      e.stopPropagation();
    });
    lightBox.addEventListener("click",()=>{
      lightBox.classList.remove("active");
    });
    imageResult.src = image.src;
  });
});

const adelantarImagen = ()=>{
  if(indiceImagen === images.length -1){
    indiceImagen = -1;
  }
  imageResult.src = images[indiceImagen +1].src;
  indiceImagen++;
};

nextImage.addEventListener("click",adelantarImagen);

const retrocederImagen = ()=>{
  if(indiceImagen === 0){
    indiceImagen = images.length;
  }
  imageResult.src = images[indiceImagen -1].src;
  indiceImagen--;
}

previusImage.addEventListener("click",retrocederImagen);
