document.getElementById("anim-intro").addEventListener('click', function(){
    const intro = document.getElementById('intro');
    const page = document.getElementById('page');
    intro.classList.add('animation'); 
    page.classList.remove('hidden');
    page.classList.add('animation-2');

    setTimeout(function() {
        intro.classList.add('hidden');
    }, 700);
})
