document.addEventListener('DOMContentLoaded', () => {

    const popUp = document.getElementById('app_input');
    const button_input = document.createElement('button');
    button_input.textContent = "Set Board Size"
    let userColor = colorPicker.value; // Default color
    popUp.appendChild(button_input)
    const containerDiv = document.getElementById("container");

    let boardsize = 16;
    popUp.addEventListener('click', () => {
        do{
            boardsize = prompt("Set the size of the board! (Less than 100)" , boardsize);
        }
        while (boardsize < 0 || boardsize > 100);
        
        createBoard(boardsize);
    });

    console.log(boardsize);

    

    function createBoard (size) {

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        containerDiv.style.width = `${size * 2}rem`;

        for(let i = 0; i < size * size; i++ ){
            const div = document.createElement("div");
            div.classList.add('grid-item');
            containerDiv.appendChild(div)
    }
    }

    createBoard(boardsize);

    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid-item')) {
            event.target.style.backgroundColor = userColor;
        }
    });

    colorPicker.addEventListener('input', () => {
        userColor = colorPicker.value;
    }); 

    
});