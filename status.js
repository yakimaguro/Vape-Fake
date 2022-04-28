var time = 500;
$('span').each(function(i, element) {
    setTimeout(function() {
        $(element).delay(1000 * i).css('background-color', "#278773")
        $('#status-message').delay(1000 * i).text('Stage ' + (i + 1) + '/18')
    }, time)
    time += Math.floor(Math.random() * (20000 + 1 - 5000)) + 5000;
})