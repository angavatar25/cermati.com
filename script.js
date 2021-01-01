$(document).ready(function() {
    $('.button_ok').click(function() {
        $('.notification_panel').css('margin-top', -($('.notification_panel').innerHeight()));
        // $('.notification_panel').css('height', 0);
        // $('.notification_panel').css('padding', 0);
        $('.content').css('padding-top', 0);
    })
    var notification_height = $('.notification_panel').height();
    $('.content').css('padding-top', notification_height + 20);

    $('#closeButton').click(function() {
        $('.newsletter__panel').removeClass('appear')
        localStorage.setItem('hiddenNavigation', 'disappear');
        var toggleHidden = localStorage.getItem('hiddenNavigation');
        $('.newsletter__panel').toggleClass(toggleHidden)
    })

    var currentScrollTop = 0, previousScrollDir = true;
    $(window).scroll(function() {
        var bodyHeight = $('body').height();
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
            if (previousScrollDir && $(this).scrollTop() > bodyHeight/3) {
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

