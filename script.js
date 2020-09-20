$(document).ready(function() {
    $('.button_ok').click(function() {
        // $('.page__header').css("margin-top", "-85px");
        // $('.page__header').addClass('disappear_notification')
        $('.notification_panel').css('margin-top', -($('.notification_panel').innerHeight()));
    })
    
    $('#closeButton').click(function() {
        $('.newsletter__panel').removeClass('appear')
        localStorage.setItem('hiddenNavigation', 'disappear');
        var toggleHidden = localStorage.getItem('hiddenNavigation');
        $('.newsletter__panel').toggleClass(toggleHidden)
    })

    var currentScrollTop = 0, previousScrollDir = true;
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop() > 50;
        var toggleHidden = localStorage.getItem('hiddenNavigation');

        function showNewsletterPanel() {
            $('.newsletter__panel').addClass('appear');
            $('.newsletter__panel').removeClass('disappear');
            localStorage.removeItem('hiddenNavigation');
        }

        setInterval(showNewsletterPanel, 600000);

        if(toggleHidden == 'disappear') {
            $('.newsletter__panel').css('display', 'none');
            $('.newsletter__panel').addClass('disappear');
        }

        if (scrollTop < currentScrollTop) {
            if (!previousScrollDir) {
              previousScrollDir = true;
            }
        } else {
            if (previousScrollDir) {
              previousScrollDir = false;
              $('.newsletter__panel').addClass('appear');
            }
        }
        currentScrollTop = scrollTop;
    })

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    })
})

