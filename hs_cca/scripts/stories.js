//init
var columnCounter = new Array(0, 0, 0, 0);
var topStory = false;
var sideStory = false;

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/hs_cca/stories/articles/getArticles.php",
        contentType: "text/plain",
        success: function (data) {
            jsonArray = data.split("<break>");
            for (i = 0; i < jsonArray.length - 1; i++) {
                var obj = $.parseJSON(jsonArray[i]);
                updateContent(obj);
            }
            $("#loading").fadeOut(500, function () {
                $("#top-story").css({
                    "display": "inline-block",
                    "height": "0px",
                    "padding": "0px"
                }).animate({
                    "height": "250px",
                    "padding": "10px",
                    "paddingLeft": "0px"
                }).promise().done(function () {
                    $("#side-story").css({
                        "display": "inline-block",
                        "height": "0px",
                        "padding": "0px"
                    }).animate({
                        "height": "250px",
                        "padding": "10px"
                    }).promise().done(function () {
                        storyUpdateReady();
                    });
                });
            });
        }
    });

    //Featured Atheletes slide scroll
    var currSlide = 1;
    var slideWidth = 930; //px
    var totalSlides = $("#feature-main .feature-main-content").length;

    $(".side-arrow.left").click(function () {
        currSlide = (currSlide == 1) ? totalSlides : currSlide - 1;
        scrollSlide();
    });

    $(".side-arrow.right").click(function () {
        currSlide = (currSlide == totalSlides) ? 1 : currSlide + 1;
        scrollSlide();
    });

    function scrollSlide(){
        $("#feature-main").css("left",parseInt((currSlide-1)*-slideWidth)+"px");   
    }
});

function updateContent(jsonObj)
{
    var pos = jsonObj.position;
    if(pos == 1)
    {
        if(!topStory)
        {
            $("#top-story-content img").attr("src", jsonObj.image);
            $("#top-story-content h3 a").attr("href", jsonObj.url);
            $("#top-story-content h3 a").html(jsonObj.title);
            $("#top-story-content p").html(jsonObj.excerpt + ' <a href="' + jsonObj.url + '" class="readmore">Read more...</a>');
            topStory = true;
        }
        else
        {
            var trace = printStackTrace();
            logconsole("Cannot have multiple top stories, please update XML. Stack trace: "+trace.join('\n'));
        }
    }
    else if(pos == 2)
    {
        if(!sideStory)
        {
            $("#side-story img").attr("src", jsonObj.image);
            $("#side-story h3 a").attr("href", jsonObj.url);
            $("#side-story h3 a").html(jsonObj.title);
            $("#side-story p").html(jsonObj.excerpt + ' <a href="' + jsonObj.url + '" class="readmore">Read more...</a>');
            sideStory = true;
        }
        else
        {
            var trace = printStackTrace();
            logconsole("Cannot have multiple side stories, please update XML. Stack trace: "+trace.join('\n'));
        }
    }
    else if(pos == 3)
    {
        var ele = "";
        ele += '<div class="rest-stories-article articles">';
        ele += '<img src="' + jsonObj.image + '" alt="rest">';
        ele += '<h3><a href="' + jsonObj.url + '">' + jsonObj.title + '</a></h3>';
        ele += '<p>' + jsonObj.excerpt + ' <a href="' + jsonObj.url + '" class="readmore">Read more...</a></p>';
        ele += '</div>';
        var colNo;
        if (columnCounter[1] == columnCounter[2] && columnCounter[2] == columnCounter[3]) colNo = 1;
        else if (columnCounter[1] > columnCounter[2] && columnCounter[2] == columnCounter[3]) colNo = 2;
        else if (columnCounter[1] == columnCounter[2] && columnCounter[2] > columnCounter[3]) colNo = 3;
        var oldHTML = $("#col"+colNo).html();
        $("#col"+colNo).html(oldHTML + ele);
        columnCounter[colNo]++;
    }
}

function storyUpdateReady ()
{
    a = Math.ceil($(".rest-stories-article").length / 3);
    i = 0;
    for (x = (a-1); x >= 0; x--)
    {
        $(".rest-stories-article:nth-child(" + a + "n-" + x + ")").each(function ()
        {
            if ($(this).css("display") == "none")
            {
                //$(this).delay(400 * i).slideDown(1000);
                if ($(this).parent()[0].id == "col1")
                {
                    $(this).delay(400 * i).css({
                        "display": "inline-block",
                        "height": "0px",
                        "padding": "0px",
                        "margin": "0px"
                    }).animate({
                        "height": "271px",
                        "padding": "10px",
                        "margin": "10px",
                        "marginLeft": "0px"
                    });
                    i++;
                }
                else
                {
                    $(this).delay(400 * i).css({
                        "display": "inline-block",
                        "height": "0px",
                        "padding": "0px",
                        "margin": "0px"
                    }).animate({
                        "height": "271px",
                        "padding": "10px",
                        "margin": "10px"
                    });
                    i++;
                }
            }
            //$(".rest-stories-article").animateAuto("height");
        });

    }
}