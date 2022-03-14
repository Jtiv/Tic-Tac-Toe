let squares = document.querySelectorAll(".square");
let turn = 0;
let blueArr = [];
let redArr = [];
let winArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

    

let handleClick = (e) =>{
    turn++
        if(turn%2===0){
            e.target.classList.add("blue");
            blueArr.push(parseInt(e.target.innerHTML));
        }else{
             e.target.classList.add("red");
            redArr.push(parseInt(e.target.innerHTML));
        }
    console.log("clicked!", turn);
    e.target.removeEventListener("click", handleClick);
}


for(let i=0; i < squares.length; i++){
    squares[i].addEventListener("click", handleClick);
}
