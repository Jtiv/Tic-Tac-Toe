let squares = document.querySelectorAll(".square");
let turn = 0;

let handleClick = (e) =>{
    turn++
    e.target.classList.add("blue");
    console.log("clicked!", turn);
}



for(let i=0; i<squares.length; i++){
    squares[i].addEventListener("click", handleClick);
}
