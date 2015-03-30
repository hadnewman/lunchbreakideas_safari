$("a").click(function (e) {
    safari.application.activeBrowserWindow.openTab().url = $(this).attr("href");
});