$('nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('nav').innerHeight(),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
});
document.querySelector('#menu-btn').addEventListener('click', function() {


    document.querySelector('#menu-site').classList.toggle("active");
    document.querySelector('#menu-icon').classList.toggle("active");
});