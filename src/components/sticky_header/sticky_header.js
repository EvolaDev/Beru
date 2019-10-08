// sticky-header handler
function stickyHeaderHandler() {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var stickyHead = $('.header__sticky');
        if (stickyHead.hasClass("sticky-hidden") && y > 600) {
            stickyHead.removeClass("sticky-hidden");
            stickyHead.addClass("sticky-show");
        } else if (stickyHead.hasClass("sticky-show") && y < 600) {
            stickyHead.removeClass("sticky-show");
            stickyHead.addClass("sticky-hidden");
        }
    });
}
stickyHeaderHandler();
