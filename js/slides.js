/*global jQuery */

(function ($) {

    function SlideSet() {
        var container = $('.slides'),
            slides = container.find('section'),
            width = container.width(),
            height = container.height(),
            current = 0,
            inner;

        slides.each(function (i, slide) {
            $(slide).width(width);
            $(slide).height(height);
        });

        slides.wrapAll("<div class='inner'></div>");
        inner = $('.inner');
        inner.width(width * slides.length);

        function moveTo(i) {
            current = i;
            inner.css('left', -1 * current * width);
        }

        this.left = function () {
            moveTo((current - 1) < 0 ? 0 : current - 1);
        };

        this.right = function () {
            moveTo((current + 1) >= slides.length ? (slides.length - 1) : (current + 1));
        };

        moveTo(0);
    }

    $(function () {
        var slides = new SlideSet();

        $(document).keydown(function (e) {
            if (e.keyCode === 37) {
                slides.left();
            }
            else if (e.keyCode === 39) {
                slides.right();
            }
        });
    });
})(jQuery.noConflict());