$(document).ready(function(){

    $('.category-item').click(function(){

        var catProduct = $(this).attr('category');
        
        $('.producto-lista').hide();

        $('.producto-lista[category='+catProduct+']').show();
    });

    $('.category-item[category="all"]').click(function(){
    
        $('.producto-lista').show();
    });
})


window.sr =ScrollReveal();

    sr.reveal('.categoria', {
        duration: 3000,
        origin: 'right',
        distance: '-100px'
    });

    sr.reveal('.normas', {
        duration: 3000,
        origin: 'left',
        distance: '65px'
    });

    sr.reveal('.lista', {
        duration: 3000,
        origin: 'right',
        distance: '65px'
    });