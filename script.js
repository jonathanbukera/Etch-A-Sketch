const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'size';
const container = document.createElement('div');
container.setAttribute('id', 'container');
let sizeOfTheTable = 16;

body.appendChild(button);
body.appendChild(container);


function createTheTable(size){
    for(let i = 0; i<size; i++){
        const hor = document.createElement('div');
        hor.classList.add('hor');
        container.appendChild(hor);
        for(let j =0; j<size; j++){
            const vert = document.createElement('div');
            vert.classList.add('vert');
            hor.appendChild(vert);
            vert.addEventListener('mouseover',function(e) {
                e.target.style.background = 'grey';
            })
            vert.addEventListener('click', function(e){
                e.target.style.background = 'white';
            })
        }  
    }
};
createTheTable(sizeOfTheTable);

button.addEventListener('click',() => {
    sizeOfTheTable = prompt("What are the dimension that you would like? (100 is the max)");
    console.log(sizeOfTheTable);
    while(isNaN(sizeOfTheTable) || sizeOfTheTable>100 || sizeOfTheTable<2){
        sizeOfTheTable = prompt('Enter a value that is acceptable!')
    }
    console.log(sizeOfTheTable);
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    createTheTable(sizeOfTheTable);
})




