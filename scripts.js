const pnl = document.querySelectorAll(".panel");


function toggleSelect() {
    this.classList.toggle('open');
}

function toggleActive( e ) {
    // console.log(e.propertyName); // it will return each transition`s name ended
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active');
}

pnl.forEach(panel => panel.addEventListener('click', toggleSelect));
pnl.forEach(panel => panel.addEventListener('transitionend', toggleActive));