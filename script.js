let squares = document.querySelectorAll(".square");


let clickHandler = (e) => {
    
    console.log("clicked!");
    e.target.innerText = "blaaah";

}



for(let i=0; i < squares.length; i++) {

    squares[i].addEventListener("click", clickHandler);

}
