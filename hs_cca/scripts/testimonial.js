//init
var currentexpanded = "#testimonial1";

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/hs_cca/stories/testimonials/getQuotes.php",
        contentType: "text/plain",
        success: function (data) {
            jsonArray = data.split("<break>");
            for (i = 0; i < jsonArray.length - 1; i++) {
                var obj = $.parseJSON(jsonArray[i]);
                var original = $("#testimonials").html();
                var ele = "";
                ele += '<div class="testimonials-box" id="testimonial' + (i + 1) + '">';
                ele += '<img src="' + obj.image + '" alt="testimonial_img' + (i + 1) + '">';
                ele += '<p>' + obj.quote + '</p>';
                ele += '<span class="Tauthor">' + obj.author + '</span>';
                ele += '<div>';
                $("#testimonials" + (i + 1)).data("original-quote", obj.quote);
                $("#testimonials").html(original + ele);
            }
            $("#loading").fadeOut(500, function () {
                $("#testimonials").slideDown(300, function () {
                    i = 0;
                    $(".testimonials-box").each(function () {
                        $(this).delay(100 * i).animate(
                        {
                            "opacity": 1
                        }, 150).promise().done(function () {
                            $(this).ellipsis("p",
                            {
                                setTitle: "onEllipsis",
                                live: true
                            });
                        });
                        i++;
                    }).promise().done(function () {
                        readyClick();
                    });
                });
            });
        }
    });

    //Testimonials box
    //Expand and Shrink
    function readyClick() {

        $(".testimonials-box").click(function (e) {
            currHeight = $(this).height();
            $(currentexpanded).stop(true, false).animate({
                "height": currHeight,
                "width": "218px"
            }, 200);
            $(currentexpanded).ellipsis("p",
            {
                setTitle: "onEllipsis",
                live: true
            });
            lastidx = parseInt(($(currentexpanded).attr("id")).slice(11));
            if ((lastidx % 4) == 0) {
                $("#testimonial" + lastidx).before($("#testimonial" + (lastidx - 1)));
            }
            if (currentexpanded != this) {
                idx = parseInt(($(this).attr("id")).slice(11));
                if ((idx % 4) == 0) {
                    $("#testimonial" + idx).after($("#testimonial" + (idx - 1)));
                }
                $(this).stop(true, false).animate({
                    "height": currHeight,
                    "width": "468px"
                }, 200);
                //$("#testimonial" + idx + " p").text($("#testimonial" + idx + " p").attr("title"));
                //$("#testimonial" + idx + " p").text($("#testimonial" + idx).data("original-quote"));
                currentexpanded = this;
            }
            else {
                currentexpanded = "#testimonial" + lastidx;
            }
        });
    }
});