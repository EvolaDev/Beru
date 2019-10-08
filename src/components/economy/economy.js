// economy-accordion handler.
(function () {
    var isRowExist = false;
    function accordionHandler() {
        row = $(".economy-accordion");
        isRowExist = row.lenght > 0;
        $(row).on("click", function (event) {
            if (!$(event.target).closest(row).hasClass("active")) {
                $(event.target).closest(row).addClass("active");
                $(event.target).closest(row).next().addClass("show");
                $(event.target).closest(row).find(".economy-picker img")
                    .animate({ borderSpacing: +180 }, {
                        step: function (now, fx) {
                            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                        },
                        duration: 400,
                        "specialEasing": { "transition-timing-function": "easeOutQuint" }
                    });
                event.stopPropagation();
            } else {
                $(event.target).closest(row).find(".economy-picker img")
                    .animate({ borderSpacing: +1 }, {
                        step: function (now, fx) {
                            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                        },
                        duration: 200,
                        "specialEasing": { "transition-timing-function": "easeOutQuint" }
                    })
                $(event.target).closest(row).removeClass("active");
                $(event.target).closest(row).next().removeClass("show");
                event.stopPropagation();
            }
        });
    }

    // economy kat handler
    function katHandler() {
        var link = $(".economy-link");
        var katPanel = $(".economy-kat__wrapper");
        link.on("click", function (event) {
            link.animate({ "opacity": 0 },
                {
                    "duration": 200, "specialEasing": { "transition-timing-function": "easeOutQuint" },
                    "complete": function () {
                        link.css("visibility", "hidden");
                        !katPanel.hasClass("show")

                            ? katPanel.addClass("show")
                            : null;
                    }
                })
        });
    }

    accordionHandler();
    katHandler();
    if (!isRowExist) {
        document.addEventListener("HTMLImportsLoaded", accordionHandler);
        document.addEventListener("HTMLImportsLoaded", katHandler);
    }
})();
