var homeArticleCounter = new Array(0, 0, 0);
$(document).ready(function ()
{
    $.ajax({
        type: "GET",
        url: "/hs_cca/stories/articles/getArticles.php",
        contentType: "text/plain",
        success: function (data)
        {
            jsonArray = data.split("<break>");
            for (i = 0; i < jsonArray.length - 1; i++)
            {
                var obj = $.parseJSON(jsonArray[i]);
                updateContent(obj);
            }
            $("#loading").fadeOut(500, function ()
            {
                $("#top-story").slideDown(400, function ()
                {
                    $("#other-stories").slideDown(200, function ()
                    {
                        homeStoryUpdateReady();
                    });
                });

                /*$("#top-story").css({
                "display": "block",
                "height": "0px",
                "padding": "0px"
                }).animate({
                "height": "278px",
                "padding": "10px"
                }).promise().done(function () {
                $("#other-stories").css({
                "display": "block",
                "height": "0px",
                "padding": "0px"
                }).animate({
                "height": "278px",
                "padding": "10px"
                }).promise().done(function () {
                homeStoryUpdateReady();
                });
                });*/
            });
        }
    });
});

function updateContent(jsonObj)
{
    var pos = jsonObj.position;
    if(pos == 1)
    {
        if(homeArticleCounter[0] == 0)
        {
            $("#top-story-content img").attr("src", jsonObj.image);
            $("#top-story-content h3 a").attr("href", jsonObj.url);
            $("#top-story-content h3 a").html(jsonObj.title);
            $("#top-story-content p").html(jsonObj.excerpt + ' <a href="' + jsonObj.url + '" class="readmore">Read more...</a>');
            homeArticleCounter[0]++;
        }
        else
        {
            var trace = printStackTrace();
            logconsole("Cannot have multiple top stories, please update XML. Stack trace: "+trace.join('\n'));
        }
    }
    else if(pos == 2)
    {
        if(homeArticleCounter[1] == 0)
        {
            $("#othst1 img").attr("src", jsonObj.image);
            $("#othst1").parent().attr("href", jsonObj.url);
            $("#othst1 h4").html(jsonObj.title);
            $("#othst1 p").html(jsonObj.excerpt);
            /*$("#othst1").ellipsis("p", 
            {
                ellipsis: '... <a href="' + jsonObj.url + '" class="readmore">Read more...</a>',
                setTitle: "onEllipsis",
                live: true
            });*/
            homeArticleCounter[1]++;
        }
        else
        {
            var trace = printStackTrace();
            logconsole("Cannot have multiple side stories, please update XML. Stack trace: "+trace.join('\n'));
        }
    }
    else if(pos == 3)
    {
        if(homeArticleCounter[2] < 2)
        {
            homeArticleCounter[2]++;
            var id = homeArticleCounter[2] + 1;
            $("#othst" + id + " img").attr("src", jsonObj.image);
            $("#othst" + id).parent().attr("href", jsonObj.url);
            $("#othst" + id + " h4").html(jsonObj.title);
            $("#othst" + id + " p").html(jsonObj.excerpt);
            /*$("#othst" + id).ellipsis("p", 
            {
                ellipsis: '... <a href="' + jsonObj.url + '" class="readmore">Read more...</a>',
                setTitle: "onEllipsis",
                live: true
            });*/
        }
    }
}

function homeStoryUpdateReady() 
{
    $("#othst1").slideDown(150, function ()
    {
        //url = $("#othst1").parent().attr("href");
        $("#othst1 p").ellipsis(
        {
            //ellipsis: '... <a href="' + url + '" class="readmore">Read more...</a>',
            setTitle: "onEllipsis"
        });
        $("#othst2").slideDown(150, function ()
        {
            //url = $("#othst2").parent().attr("href");
            $("#othst2 p").ellipsis(
            {
                //ellipsis: '... <a href="' + url + '" class="readmore">Read more...</a>',
                setTitle: "onEllipsis"
            });
            $("#othst3").slideDown(150, function()
            {
                //url = $("#othst3").parent().attr("href");
                $("#othst3 p").ellipsis(
                {
                    //ellipsis: '... <a href="' + url + '" class="readmore">Read more...</a>',
                    setTitle: "onEllipsis"
                });
            });
        });
    });

    /*$("#othst" + (i + 1)).delay(400 * i).css({
        "display": "block",
        "height": "0px",
        "padding": "0px"
    }).animate({
        "height": "60px",
        "padding": "5px"
    });*/
}