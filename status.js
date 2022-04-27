var time = 500;
$('span').each(function(i, element) {
    setTimeout(function() {
        $(element).delay(1000 * i).css('background-color', "#278773")
    }, time)
    time += Math.floor(Math.random() * (20000 + 1 - 2000)) + 2000;
})