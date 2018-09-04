$(document).ready(function() {
    $('nav ul li').hover(
        function () {
            $(this).stop().animate({
                backgroundColor: 'rgba(37, 152, 206, 0.3)'
            },
            100,
            'easeInSine'
            );
        }, function () {
            $(this).stop().animate({
                backgroundColor: 'rgba(37, 152, 206, 0)'
            },
            100,
            'easeOutBounce'
            );
        }
    );


});
