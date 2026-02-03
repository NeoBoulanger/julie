//je récupère le bouton

let bouton=document.querySelector('button');

function move(){
    bouton.style.marginLeft=Math.round(Math.random()*70+10)+"%";
    bouton.style.marginTop=Math.round(Math.random()*40+10)+"%";
}

bouton.addEventListener('mouseover', move);

bouton.addEventListener('mousedown', (e)=>{
    alert('Merci');
});
