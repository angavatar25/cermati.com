$(document).ready(function() {
    $('.button_ok').click(function() {
        // $('.page__header').css("margin-top", "-85px");
        $('.page__header').addClass('disappear_notification')
    })
    
    $('#closeButton').click(function() {
        $('.newsletter__panel').removeClass('appear')
        var toggleClass = localStorage.setItem("ClasName", "disappear");
        $('.newsletter__panel').toggleClass(toggleClass)
    })

    //keeping the component not showing up in local storage
    // $('newsletter__panel').addClass(localStorage.ClassName);

    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.newsletter__panel').addClass('appear');
        }

        
    })

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    })
})

