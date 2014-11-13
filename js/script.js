/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    
    var numqudrati=150;
    
    setInterval(function () {
        var r=Math.floor((Math.random() * numqudrati));
        $(".quadrato").eq(r).mouseenter();
    }, 1000);
    
    var vettore = ["#00AACC", "#FF4E00", "#00dd2f", "#ff4444", "#00AACC", "#ffdb00", "#a700b3"];
    for (var i = 0; i < 150; i++) {
        var col = vettore[Math.floor((Math.random() * vettore.length))];
        var $append = $(".append");
        $append.after("<div class=\"quadrato\" style=\"background-color:" + col + "\"></div>");
    }

    $(document).on("click", ".quadrato", function (e) {
        $(this).fadeOut("slow");
        numqudrati--;
    });
    $(".button").click(function () {
        numqudrati++;
        var col = vettore[Math.floor((Math.random() * vettore.length))];
        var $append = $(".append");
        $append.after("<div class=\"quadrato\" style=\"background-color:" + col + "\"></div>");
    });
    $(document).on("mouseenter", ".quadrato", function (e) {
        $(this).animate({borderSpacing: -180}, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
        }, 'linear');
    });
});


