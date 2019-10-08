
(function () {
    var isLinkExist = false;
    function linkHover() {
        var link = $(".footer-link__wrapper");
        isLinkExist = link.lenght > 0;
        $(".footer-link__wrapper").hover(function () {
            $(".footer-link__wrapper.first").css("border-bottom", "none");
            $(".footer-link__wrapper.second").css("border-bottom", "none");
        }, function () {
            $(".footer-link__wrapper.first").css("border-bottom", "1px #ffffff solid");
            $(".footer-link__wrapper.second").css("border-bottom", "1px #ffffff solid");
        })
    };
    linkHover();
    if (!isLinkExist) {
        document.addEventListener("HTMLImportsLoaded", linkHover);
    }
})();

