window.onscroll = function () { 
    if (navvi) {
        renderIndexHTMLNav()
    } else {
        renderStickyNavBar(navi)
    }
};