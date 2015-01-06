//Init
var searchopen = false;
var sfocus = false;
var searchmo = false;
var ccasearchfo = false;
var submenu2mo = false;
var cca = [
    { label: "Badminton", url:"", category: "Sports" },
    { label: "Basketball", url:"", category: "Sports" },
    { label: "Canoeing", url:"", category: "Sports" },
    { label: "Cross Country", url:"", category: "Sports" },
    { label: "Fencing", url:"", category: "Sports" },
    { label: "Gymnastics", url:"", category: "Sports" },
    { label: "Judo", url:"", category: "Sports" },
    { label: "Shooting", url:"", category: "Sports" },
    { label: "Softball", url:"", category: "Sports" },
    { label: "Squash", url:"", category: "Sports" },
    { label: "Table Tennis", url:"", category: "Sports" },
    { label: "Tennis", url:"", category: "Sports" },
    { label: "Track and Field", url:"", category: "Sports" },
    { label: "Volleyball", url:"", category: "Sports" },
    { label: "Waterpolo", url:"", category: "Sports" },
    { label: "Wushu", url:"", category: "Sports" },

    { label: "National Cadet Corps", url:"", category: "Uniformed Groups" },
    { label: "National Police Cadet Corps", url:"", category: "Uniformed Groups" },
    { label: "Scouts", url:"", category: "Uniformed Groups" },
    { label: "St. John Ambulance Brigade", url:"", category: "Uniformed Groups" },

    { label: "Art Club", url:"", category: "Aesthetics" },
    { label: "Band", url:"", category: "Aesthetics" },
    { label: "Chinese Drama", url:"", category: "Aesthetics" },
    { label: "Chinese Orchestra", url:"", category: "Aesthetics" },
    { label: "Choir", url:"", category: "Aesthetics" },
    { label: "English Drama", url:"", category: "Aesthetics" },
    { label: "Piano Ensemble", url:"", category: "Aesthetics" },
    { label: "String Orchestra", url:"", category: "Aesthetics" },

    { label: "Chinese Calligraphy", url:"", category: "Clubs and Societies" },
    { label: "Chinese Chess", url:"", category: "Clubs and Societies" },
    { label: "EC³ (IT Club)", url:"", category: "Clubs and Societies" },
    { label: "English Debate", url:"", category: "Clubs and Societies" },
    { label: "International Chess", url:"", category: "Clubs and Societies" },
    { label: "Library", url:"", category: "Clubs and Societies" },
    { label: "Mediatech", url:"", category: "Clubs and Societies" },
    { label: "Robotics Club", url:"", category: "Clubs and Societies" },
    { label: "Socrates Club", url:"", category: "Clubs and Societies" },
    { label: "Weiqi", url:"", category: "Clubs and Societies" },
    { label: "Youth Flying Club", url:"", category: "Clubs and Societies" }
];

    $(document).ready(function ()
    {
        /*---------SEARCH--------*/
        $("#search-area").mouseenter(function ()
        {
            searchmo = true;
            /*$("#search").css("border", "1px solid #be0000");
            $("#search").css("border-top", "none");*/
            $("#search-input").css("border-bottom", "1px solid #be0000");
            $("#search-area .corner").css("background-color", "#be0000");
            $("#search-iconi").css("display", "none");
            $("#search-icona").css("display", "");
            if (!searchopen)
            {
                $("#search").stop(true, false).slideDown(150);
                $("#search-input").focus();
                searchopen = true;
            }
        });
        $("#search-area").mouseleave(function ()
        {
            searchmo = false;
            $("#search-input").css("border-bottom", "1px solid #aaa");
            $(".corner").css("background-color", "#aaa");
            $("#search-icona").css("display", "none");
            $("#search-iconi").css("display", "");
            if ((searchopen) && (!sfocus))
            {
                $("#search").stop(true, false).slideUp(150);
                searchopen = false;
            }
        });
        $("#search-area").keyup(function (e)
        {
            if (e.keyCode == 13)
            {
                q = $("#search-input").val();
                ksearch(q);
            }
        });

        /*---------SUB-MENUS--------*/
        $(".navbarmenu").mouseenter(function ()
        {
            subID = parseInt($(this)[0].dataset.link);
            //$("#sub"+subID).css("display","block");
            if (subID)
            {
                console.log(subID);
                $("#sub" + subID).stop(true, false).slideDown(200);
                if (subID == 2) submenu2mo = true;
            }
        });

        $(".navbarmenu").mouseleave(function ()
        {
            subID = parseInt($(this)[0].dataset.link);
            if (subID > 2)
            {
                $(".sub_menu").stop(true, false).slideUp(200);
            }
            else if (subID == 2)
            {
                console.log("2 mouseleave");
                submenu2mo = false;
                if (!ccasearchfo)
                {
                    $(".sub_menu").stop(true, false).slideUp(200);
                }
            }
        });

        //------SUBSEARCH-------
        $("#sub_search").mouseenter(function ()
        {
            $("#ccasearch").css("border-bottom", "1px solid #be0000");
            $("#sub_search .corner").css("background-color", "#be0000");
        });

        $("#sub_search").mouseleave(function ()
        {
            $("#ccasearch").css("border-bottom", "1px solid #aaa");
            $("#sub_search .corner").css("background-color", "#aaa");
        });

        $("#ccasearch").catcomplete(
        {
            delay: 0,
            source: cca,
            select: function (event, ui)
            {
                window.location = ui.item.url;
            }
        });
        $("#sub_search").keyup(function (e)
        {
            if (e.keyCode == 13)
            {
                q = $("#sub_search").val();
                ccasearch(q);
            }
        });
    });

//jqeryui autocomplete
$.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        that._renderItemData( ul, item );
      });
    }
  });

//searchbar focus
function searchf(focus)
{
    if (focus) sfocus = true;
    else
    {
        sfocus = false;
        if ((searchopen) && (!sfocus) && (!searchmo))
        {
            searchopen = false;
            $("#search").stop(true, false).slideUp(150);
        }
    }
}

//cca searchbox focus
function ccasearchf(focus)
{
    if (focus) 
    {
        ccasearchfo = true;
        //console.log("ccasearchfo:" + ccasearchfo);
    }
    else
    {
        ccasearchfo = false;
        if(!submenu2mo)
        {
            $(".sub_menu").stop(true, false).slideUp(200);
        }
    }
}

//cca search
function ccasearch(query)
{
    
}

//search
function ksearch(query)
{
    q = $.trim(query);
    if(!q.length)
    {
        console.log("Empty query");
        $("#search-input").animate({
            backgroundColor: "#ff8484"
        }, 250, function ()
        {
            $("#search-input").animate({
                backgroundColor: "#F9F9F9"
            }, 250);
            //ferror("Please enter a valid query.", 5000);
        });
    }
    else
    {
        var w = fescape(q);
        //search here
    }
}

//fsescape
function fescape(text)
{
    var a = escape(text).replace(/%(..)/g,"&#x$1;");
    return a;
}