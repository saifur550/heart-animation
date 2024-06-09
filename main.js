// * get body  *//
const bodyUi = document.querySelector('body')

bodyUi.addEventListener('mousemove',(event) => {

    const xPos = event.offsetX;
    const yPos= event.offsetY;
    // create element
    const createSpan = document.createElement("span");
    //add style 
    createSpan.style.left= xPos + "px" ;
    createSpan.style.top= yPos + "px" ;

    const size = Math.random() * 100;
    createSpan.style.width = size + "px";
    createSpan.style.height = size + "px";

    console.log(size);   

  

    //append item here 
    bodyUi.appendChild(createSpan);


    setTimeout( ()=> {
        createSpan.remove()
    },3000)

})



