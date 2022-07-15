const names = document.querySelectorAll(".single-project");

const personImg = document.querySelectorAll(".project-hover-img");

for (let i = 0; i < names.length; i++){

  for (let j = 0; j < personImg.length; j++){
    let imageId = personImg[j]
  
    if (personImg[j].id == ('project-hover-img'+[i+1])){

      names[i].addEventListener('mouseover', () => {
 
        imageId.style.display = 'block';
  
      })
      names[i].addEventListener('mouseleave', () => {
        imageId.style.display = '';
      })

      window.addEventListener('mousemove', (e) => {
        let x = e.offsetX,
        y = e.offsetY;

        imageId.style.left = `${x}px`
        imageId.style.top = `${y}px`
      })

    }
    
  }


}