(function () {
    var counter = 0;
    var velocity = 0;
    var prevTime = new Date();

    var $content = $('#content').on(window.ontouchstart === null ? 'touchstart' : 'click', function () {
        var now = new Date();
        counter += Math.ceil(200 / (now - prevTime));
        //velocity = (velocity + 200 / (now - prevTime)) / 2;
        //counter += Math.ceil(velocity);
        prevTime = now;

        //var color = counter.toString(16);
        //if (color.length < 6) {
        //    color = Array(6 - color.length + 1).join('0') + color;
        //}
        //$content.css('color', '#' + color);
        $content.css('color', 'hsl(' + (counter % 360) + ', 50%, ' + Math.min(parseInt(counter / 10), 100) + '%)');

        refreshPanel();
    });
    refreshPanel();

    function refreshPanel() {
        console.log('refreshPanel()');
        $content.text(counter);
    }
})();
