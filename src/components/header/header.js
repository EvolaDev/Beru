
// handler to scrolling-link;
(function () {
    var isHeadExist = false;
    function scrollingToBottom() {
        var desktopSelector = ".head-info__about-subscription";
        var tabletSelector = ".head-info__about-subscription__tablet";
        var linkSelector =
            $(desktopSelector).css("display") === "none"
                ? $(tabletSelector)
                : $(desktopSelector);
        isHeadExist = linkSelector.length > 0;
        $(linkSelector).on("click", function (e) {
            $("body,html")
                .stop()
                .animate({ "scrollTop": $("body .page-content__economy").offset().top }, 1000);
            e.preventDefault();
        });
    }
    scrollingToBottom();
    if (!isHeadExist) {
        document.addEventListener("HTMLImportsLoaded", scrollingToBottom);
        window.onresize = scrollingToBottom;
    }
})();
