$(document).ready(function ($) {
    sound = {};
    sound[1] = new Audio('audio/1.mp3');
    sound[2] = new Audio('audio/2.mp3');
    sound[3] = new Audio('audio/3.mp3');
    sound[4] = new Audio('audio/4.mp3');
    sound[5] = new Audio('audio/5.mp3');

    $(document).foundation();
    $('.hitpad').click(function() {
        number = $(this).html();
        sound[number].play();
    });
});