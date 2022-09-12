const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
document.addEventListener('keyDown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);

});

touches.forEach((touche) => {
    touche.addEventListener("click", (e) => {
        const valeur = e.target.dataset.key;
        calculer(valeur);
    });
});

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKey = listeKeycode.indexOf(valeur);
                const touche = touches[indexKey];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener("error", (e) => {
    alert("Votre calcul comprends une erreur : " + e.error.message);
});
