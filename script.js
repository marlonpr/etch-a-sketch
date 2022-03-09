const container = document.querySelector('.container');

function generateGrid (numOfSquares) {  
    
    if(container.hasChildNodes()) {
        container.textContent = "";
    }  
        
    const array = [];
    const array2 = [];

    for (let i=0; i<numOfSquares; i++) {         
        array[i] = document.createElement('div');
        array[i].classList.add('horizontal');
        container.appendChild(array[i]);
    }

    for (let i=0; i<numOfSquares**2; i++) {         
        array2[i] = document.createElement('div');
        array2[i].classList.add('vertical');
    }

    let j=0
    let k=numOfSquares;
    for (let i=0; i<numOfSquares; i++) {
        for (; j<k; j++) {
            array[i].appendChild(array2[j]);
        }
        k+=numOfSquares;
    }    
}

generateGrid(16);
pen();

function pen() {
    const square = document.querySelectorAll('.vertical');
    const btn = document.querySelector('.clear');
        
    square.forEach(div => div.addEventListener('mousedown', down));
    square.forEach(div => div.addEventListener('mouseup', up));
    square.forEach(div => div.addEventListener('dragstart', (e) => {e.preventDefault()}));
    square.forEach(div => div.addEventListener('drop', (e) => {e.preventDefault()}));
    btn.addEventListener('click', clear);

    function down() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.style.background =`rgb(${r} ${g} ${b})` ;
        square.forEach(div => div.addEventListener('mouseenter', down));
    }
    
    function up() {
        square.forEach(div => div.removeEventListener('mouseenter', down));
    }
}

function clear() {
    let squares = parseInt( prompt("Ingrese el numero de cuadros por lado",1));
    
    if (squares>64) {
        squares = 64;
    }   else if(squares<1) {
        squares = 1;
    }
   
    generateGrid(squares);
    pen();

    if (isNaN(squares)) {
        clear();
    }
}




   







