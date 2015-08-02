jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $('.level-label').tooltip();
    GitHubActivity.feed({ username: "wtrocki", selector: "#ghfeed" });

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
            
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
});