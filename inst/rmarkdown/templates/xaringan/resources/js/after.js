// delete the temporary CSS (for displaying all slides initially) when the user
// starts to view slides
(function() {
  var deleted = false;
  slideshow.on('beforeShowSlide', function(slide) {
    if (deleted) return;
    var sheets = document.styleSheets, node;
    for (var i = 0; i < sheets.length; i++) {
      node = sheets[i].ownerNode;
      if (node.dataset["target"] !== "print-only") continue;
      node.parentNode.removeChild(node);
    }
    deleted = true;
  });
})();

//Preview cards
var preview_win_cards = document.querySelectorAll(".preview-win");
for (var card of preview_win_cards) {
    (clickedCard => {
        clickedCard.addEventListener("click", e => {
            var img = clickedCard.querySelector("img");
            if (img) {
                window.open(img.src);
            }
        });
    })(card);
}

//full screen background color
function isFullScreen() {
    return window.fullScreen || (window.innerWidth == screen.width && window.innerHeight == screen.height);
}

window.addEventListener("resize", () => {
    if (isFullScreen()) {
        document.body.style["background-color"] = "#000";
    } else {
        document.body.style["background-color"] = "#d7d8d2";
    }
});

// VUE
for (var el of document.querySelectorAll(".vue")) {
    new Vue({
        el: el
    });
}
