const button = document.querySelector('#btn')
const container = document.querySelector('.contenedor')

button.addEventListener('click', createNote );
function createNote (){
    const note = document.createElement('div')
    note.classList.add('note')
    note.style.backgroundColor = getRandomcolor();

    container.appendChild(note)
    console.log(note)

    note.addEventListener('dblclick', () =>{
        container.removeChild(note)
    })

    note.setAttribute('contenteditable', 'true')
    container.appendChild(note);
}


function getramdonpositions(){
    return Math.floor(Math.random () * 100)
}

function getRandomcolor(){
    const colors = ['lightblue',  'lightgreen', 'lightorange', 'lightbluesky', 'lightpink', 'lightsteelblue']
    const colorPosition = Math.floor(Math.random () * 7);
    const color=  colors[colorPosition];
    console.log(color);
    return color;
}