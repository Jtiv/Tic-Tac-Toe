let squares = document.querySelectorAll(".square");
let turn = 0; 
let redArr = [];
let blueArr = [];
let winArr = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","5","9"],
    ["3","5","7"]
 ];

let winCheck = (playArr) =>{
    
    for(let i=0; i < winArr.length; i++){
        for(let j=0; j < winArr[i].length; j++){

            if(winArr[i].includes(playArr[0])
             && winArr[i].includes(playArr[1])
             && winArr[i].includes(playArr[2]))
            {
                if(turn % 2 === 0){console.log("blue wins!");}   
                else {console.log("red wins!");}
            }
        }
    }
}


let clickHandler = (e) => {
    turn++;
    console.log("clicked!", turn);
    e.target.removeEventListener("click", clickHandler);
    if(turn % 2 === 0){
        e.target.classList.add("blue");
        blueArr.push(e.target.innerText);
        console.log(blueArr);
    }
    else{
        e.target.classList.add("red");
        redArr.push(e.target.innerText);
        console.log(redArr);
    }

}



for(let i=0; i < squares.length; i++) {

    squares[i].addEventListener("click", clickHandler);

}
