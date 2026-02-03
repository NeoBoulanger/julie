//je récupère le bouton

let bouton=document.querySelector('.oui');

function move(){
    bouton.style.marginLeft=Math.round(Math.random()*70+10)+"%";
    bouton.style.marginTop=Math.round(Math.random()*40+10)+"%";
}

bouton.addEventListener('mouseover', move);

let compteur=10;
bouton.addEventListener('mousedown', (e)=>{

    if(compteur===1){
        alert('Bravooooo ! ');
    }
    document.querySelector('#merci').classList.remove('hidden');
    compteur-=1;
    document.querySelector('#merci h1').textContent="Clique encore " + compteur + " fois !";
    move();
});

document.querySelector('.non').addEventListener('click', (e)=>{
    document.querySelector('body').style.backgroundColor='rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+0.4+')';
})
