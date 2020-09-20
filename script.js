$(document).ready(function() {
    $('.button_ok').click(function() {
        // $('.page__header').css("margin-top", "-85px");
        $('.page__header').addClass('disappear_notification')
    })
    
    $('#closeButton').click(function() {
        $('.newsletter__panel').removeClass('appear')
        $('.newsletter__panel').toggleClass('disappear')
        localStorage.setItem('hiddenNavigation', 'disappear');
    })

    //keeping the component not showing up in local storage
    // $('newsletter__panel').addClass(localStorage.ClassName);
    var currentScrollTop = 0, previousScrollDir = true;
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop() > 50;
        if (scrollTop < currentScrollTop) {
            if (!previousScrollDir) {
              console.log('scrolled up');
              previousScrollDir = true;
            }
        } else {
            if (previousScrollDir) {
              console.log('scrolled down');
              previousScrollDir = false;
              $('.newsletter__panel').addClass('appear');
            }
        }
        currentScrollTop = scrollTop;
        // if($(this).scrollTop() > 50) {
        //     $('.newsletter__panel').addClass('appear');
        // }

        // else if ($(this).scrollTop() > 50 && localStorage.getItem('hiddenNavigation') == 'disappear') {
        //     $('.newsletter__panel').toggleClass('disappear');
        //     $('.newsletter__panel').removeClass('appear');
        // }
    })

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    })
})

