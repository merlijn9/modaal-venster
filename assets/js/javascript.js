const mContent = document.querySelectorAll('.mContent');

for(let i=0; i<mContent.length; i++){
    let modaalNode = mContent[i];
    modaalNode.parentNode.removeChild(modaalNode);
}


const addContent = (event) => {
    const teller = mKnoppenArray.indexOf(event.target);
    console.log(teller);
    modaal.appendChild(closeButton);
    modaal.appendChild(mContent[teller]);
    mBackground.appendChild(modaal);
    document.body.appendChild(mBackground);
}


let mBackground = document.createElement('div');
mBackground.className = 'm-Background';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let closeButton = document.createElement('button');
closeButton.className = 'closeButton';
closeButton.innerHTML = '&#x00D7;';


const mKnoppen = document.querySelectorAll('.mKnop');
const mKnoppenArray = [];

const closeM = () => {
    modaal.innerHTML = "";
    mBackground.innerHTML = "";
    document.body.removeChild(mBackground);
}

closeButton.addEventListener('click', closeM);


for(let i=0; i<mKnoppen.length; i++){
    mKnoppenArray.push(mKnoppen[i]);
    mKnoppen[i].addEventListener('click', addContent);
} 
