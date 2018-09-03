$(document).ready(function() {

    $('#menu_wrapper ul li').hover(
        function () {
            $(this).stop().animate({
                backgroundColor: 'rgba(37, 152, 206, 0.74)'
            },
            500,
            'easeInSine'
            );
        }, function () {
            $(this).stop().animate({
                backgroundColor: 'white'
            },
            500,
            'easeOutBounce'
            );
        }
    );


});
