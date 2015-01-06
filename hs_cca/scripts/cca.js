var supportHistory = false;
var currentTab = 1;
var changed = false;

(function (a) {
    var index = a.search("i=");
    if (index >= 0) {
        currentTab = parseInt(a.substr(index + 2, 1));
        if (currentTab == 1) {
            currentTab = 5;
        }
    }
})(window.location.search);

$(document).ready(function () {
    //check history compatibility
    try {
        var currentState = history.state;
        var datasetTest = $("#test")[0].dataset.cca;
        supportHistory = true;
    } catch (e) {
        supportHistory = false;
        logconsole("No history/dataset support");
    }

    //Border heights for CCA trials
    var jiaksHeight = $("#trial-info .split_3:first-child").height();

    $("#trial-info .split_3").each(function () {
        $(this).height(jiaksHeight);
    });

    //generate cca list
    counter = new Array(0, 0, 0, 0, 0);
    for (i in cca) {
        cca_obj = cca[i];
        cat = cca_obj.category;
        ccaNameFull = cca_obj.label;
        if (cat == "Sports") {
            catID = 1;
            catt = "sports"
        } else if (cat == "Uniformed Groups") {
            catID = 2;
            catt = "ug";
        } else if (cat == "Aesthetics") {
            catID = 3;
            catt = "aesthetics"
        } else if (cat == "Clubs and Societies") {
            catID = 4;
            catt = "clubs"
        }
        counter[catID]++;
        urlSplit = cca_obj.url.split("/");
        urlLength = urlSplit.length - 2;
        ccaName = urlSplit[urlLength];
        if (((counter[catID] - 1) % 5) == 0) {
            output = $("#l" + catID).html();
            output += "<div class='Trow'>";
        }

        output += "<div class='cca_img_wrap'><a href='" + cca_obj.url + "' title='" + ccaNameFull + "' id='" + ccaName + "'>";
        output += "<img class='cca_img' src='/hs_cca/images/cca/" + catt + "/" + ccaName + ".png'  title='" + ccaNameFull + "' alt='" + ccaNameFull + "' />";
        if (counter[4] == 3) {
            ccaNameFull = "EC&#179;<br/>(IT Club)";
        }
        output += "<h3 class='disableSelect' class='ccaNameFull'>" + ccaNameFull + "</h3>";
        output += "</a></div>";

        if (((counter[catID]) % 5 == 0) || ((catID == 1) && (counter[catID] == 16)) || ((catID == 2) && (counter[catID] == 4)) || ((catID == 3) && (counter[catID] == 8)) || ((catID == 4) && (counter[catID] == 11))) {
            output += "</div>";
            $("#l" + catID).html(output);
        }
    }

    //remove href and change tab if necessary
    if (supportHistory) {
        $(".cca_menu_tab_wrapper").each(function () {
            $(this).removeAttr("href");
        });
        if (currentTab != 1) {
            if (currentTab == 5) {
                ccaName = "sports/";
                currentTab = 1;
                ccatt = "Sports";
            } else if (currentTab == 2) {
                ccaName = "ug/";
                ccatt = "Uniformed Groups";
            } else if (currentTab == 3) {
                ccaName = "aesthetics/";
                ccatt = "Aesthetics";
            } else if (currentTab == 4) {
                ccaName = "clubs/";
                ccatt = "Clubs & Societies";
            }

            var history_obj = {
                ccaTab: currentTab
            }

            history.pushState(history_obj, currentTab, ccaName);
            $(document)[0].title = "CCA Website (" + ccatt + ")";
            $("#l1").css("display", "none");
            $("#l" + currentTab).css("display", "block");
            changed = true;
            //Add in / to links in navbar and footer
            /*$("footer a").each(function ()
            {
            h = $(this).attr("href");
            if (h != null)
            {
            $(this).attr("href", "../" + h);
            }
            });

            $(".navbarmenu a").each(function ()
            {
            h = $(this).attr("href");
            if (h != null)
            {
            $(this).attr("href", "../" + h);
            }
            });

            $(".sub_menu:not(#sub2) a").each(function ()
            {
            h = $(this).attr("href");
            if (h != null)
            {
            $(this).attr("href", "../" + h);
            }
            });

            $("link[rel~='icon']").each(function ()
            {
            h = $(this).attr("href");
            if (h != null)
            {
            $(this).attr("href", "../" + h);
            }
            });
            h = $("#headtt").attr("href");
            if (h != null)
            {
            $("#headtt").attr("href", "../" + h);
            }*/
        }
    } else {
        if (currentTab != 1) {
            $("#l1").fadeOut(1, function () {
                $("#l" + currentTab).fadeIn(150);
            });
        }
    }

    //onclick
    $(".cca_menu_tab_wrapper").click(function () {
        if (supportHistory) {
            tabID = $(this)[0].dataset.cca;
            tabName = $(this)[0].dataset.cname;
            if (tabID != currentTab) {
                $("#l" + currentTab).fadeOut(150, function () {
                    currentTab = tabID;
                    var history_obj = {
                        ccaTab: tabID
                    }
                    var pg = tabName + "/";
                    var patt1 = new RegExp("/cca/sports/");
                    var patt2 = new RegExp("/cca/ug/");
                    var patt3 = new RegExp("/cca/aesthetics/");
                    var patt4 = new RegExp("/cca/clubs/");
                    var patt5 = new RegExp("/");
                    var loc = window.location.pathname;
                    if (patt1.test(loc) || patt2.test(loc) || patt3.test(loc) || patt4.test(loc)) {
                        pg = "../" + pg;
                    } else {
                        /*$("#sub2 a").each(function ()
                        {
                        ori = $(this).attr("href");
                        if (patt5.test(ori))
                        {
                        $(this).attr("href", ori.split("/")[1] + "/"); ;
                        }
                        
                        });*/
                    }
                    history.pushState(history_obj, tabID, pg);

                    if (tabID == 1) ccatt = "Sports";
                    else if (tabID == 2) ccatt = "Uniformed Groups";
                    else if (tabID == 3) ccatt = "Aesthetics";
                    else if (tabID == 4) ccatt = "Clubs & Societies";

                    $(document)[0].title = "CCA Website (" + ccatt + ")";
                    loc = window.location.pathname;
                    if (patt1.test(loc) || patt2.test(loc) || patt3.test(loc) || patt4.test(loc)) {
                        //$("#m2 a:first-child").attr("href", "/");
                        /*$("#sub2 a").each(function ()
                        {
                        ori = $(this).attr("href");
                        if (!(patt5.test(ori.slice(0,2))))
                        {
                        $(this).attr("href", "/" + ori);
                        }
                        });*/
                    }
                    $("#l" + tabID).fadeIn(150);

                    //*
                    //Add in / to links in navbar and footer
                    /*if (!changed)
                    {
                    $("footer a").each(function ()
                    {
                    h = $(this).attr("href");
                    if (h != null)
                    {
                    $(this).attr("href", "../" + h);
                    }
                    });

                    $(".navbarmenu a").each(function ()
                    {
                    h = $(this).attr("href");
                    if (h != null)
                    {
                    $(this).attr("href", "../" + h);
                    }
                    });

                    $(".sub_menu:not(#sub2) a").each(function ()
                    {
                    h = $(this).attr("href");
                    if (h != null)
                    {
                    $(this).attr("href", "../" + h);
                    }
                    });

                    $("link[rel~='icon']").each(function ()
                    {
                    h = $(this).attr("href");
                    if (h != null)
                    {
                    $(this).attr("href", "../" + h);
                    }
                    });
                    h = $("#headtt").attr("href");
                    if (h != null)
                    {
                    $("#headtt").attr("href", "../" + h);
                    }
                    changed = true;
                    }*/

                    //*/
                });
            }
        }
    });

    //animations
    $(".cca_img_wrap").mouseenter(function () {
        ele = $(this).find("h3");
        ele.stop(true, false).slideDown(150);
    });

    $(".cca_img_wrap").mouseleave(function () {
        ele = $(this).find("h3");
        ele.stop(true, false).slideUp(150);
    });

    var cici = '{"badminton": { "Venue":"Kah Kee Hall", "Date":"Tuesday 13 January (4-6 pm) , Thursday 15 January (4-6 pm) and Friday 16 January (2.30-4.30pm )   ", "Attire":"PE Attire with own rackets"},"basketball": { "Venue":"Basketball Courts", "Date":"13,15,20,22 January 3pm-5pm", "Attire":"PE Attire"},"canoeing": { "Venue":"Meet at benches outside High School Admin Office at 2:15pm for one of our members to bring you to MacRitchie Reservoir. Dismissal will be from Macritchie Reservoir at 6pm.", "Date":"Monday, Wednesday & Friday (2.15pm-6pm)", "Attire":"Wear PE attire. Bring dry clothes for change (might get wet), filled water bottle, sun block, umbrella (in case of rain), if wearing glasses, please bring along spectacle clip or band.<br>"},"cross-country": { "Venue":"Track / School Field, In case of rain, please gather at clock tower. If track is not ready by then go to CCAB", "Date":"Mon, Wed and Friday 430pm to 630pm till end of January", "Attire":"PE Attire, Running Shoes/"},"fencing": { "Venue":"Canteen<br>(In front of bookshop)", "Date":"Wed (3.30pm to 5.30pm) and Friday (2.30pm to 4.30pm). 14th, 16th, 21st and 23rd of January", "Attire":"PE Attire"},"gymnastics": { "Venue":"Gymnasium", "Date":"Monday, Wednesday & Friday (1500hrs to 1800hrs)", "Attire":"PE Attire"},"judo": { "Venue":"Dojo Room", "Date":"Mon, Wed and Fri. 3.30 pm", "Attire":"PE Attire"},"shooting": { "Venue":"Rifle Range", "Date":"Mon-Fri 2.30pm to 5.30pm", "Attire":"PE Attire"},"softball": { "Venue":"Side Field<br>(near College)", "Date":"Mondays, Wednesdays and Thursdays 230-4pm", "Attire":"PE Attire"},"table tennis": { "Venue":"Table Tennis Room", "Date":"12/01, 19/01, 26/01", "Attire":"PE Attire<br>(with table tennis bats)"},"tennis": { "Venue":"Tennis Courts", "Date":"13 January, 20 January, 27 January, 3 February ALL 2.30-3.30pm", "Attire":"PE Attire<br>(with tennis rackets if any)"},"track and field": { "Venue":"Track / School Field, In case of rain, please gather at clock tower", "Date":"Mon/Wed/Fri 3:00pm", "Attire":"PE Attire, Running Shoes/Spike Shoes (if any)"},"volleyball": { "Venue":"Clock Tower<br>(Meet at 3pm sharp before moving over to College Hall)", "Date":"Wed(3-6), Thur(4-7), Sat(2-5)", "Attire":"PE Attire"},"waterpolo": { "Venue":"Wait outside D203, classroom nearest to open air car-park sheltered drop-off and Choir Room. A teacher or senior will bring you to training location. School pool is under renovation ", "Date":"Thurs and Fri 430pm to 630pm. Last trial on Fri 30 Jan 2015.", "Attire":"Swimming Trunks & PE attire<br>(bring sunblock, towel, shampoo, shower gel)"},"wushu": { "Venue":"SALT Centre (Ground Floor)", "Date":"", "Attire":"PE Attire"},"ncc": { "Venue":"SALT Centre<br>(Foyer/NCC Room)", "Date":"Dates: 14/01/15, 21/01/15, 23/01/15, 28/01/15, 04/02/15, 06/02/15 Time: 1420-1620", "Attire":"PE Attire"},"npcc": { "Venue":"SALT Centre<br>(Foyer/NPCC Room)", "Date":"Dates: 14/01/15, 16/01/15, 21/01/15, 28/01/15, 30/01/15, 04/02/15 and 06/02/15 Time: 1500h - 1730h", "Attire":"PE Attire"},"scouts": { "Venue":"EP3 Shed", "Date":"", "Attire":"PE Attire"},"scouts": { "Venue":"EP3 Shed", "Date":"", "Attire":"PE attire"},"st john ambulance brigade": { "Venue":"SALT Centre<br>(SJAB Room)", "Date":"14/01/15, 16/01/15, 21/01/15, 23/01/15, 28/01/15, 30/01/15, 04/02/15, 06/02/15 Time: 3pm-5.30pm", "Attire":"School Uniform<br>(PE Shirt optional)"},"art & crafts": { "Venue":"General Art Studio<br>(SRC Level 3)", "Date":"Fridays 1430-1630", "Attire":"School Uniform"},"chinese drama": { "Venue":"SALT Centre<br>(Black Box)", "Date":"16 Jan, 23 Jan, 30 Jan & 6 Feb, Time: 2:30 pm 5:00 pm ", "Attire":"School Uniform"},"chinese orchestra": { "Venue":"SALT Centre<br>(CO Practice Hall)", "Date":"Fridays 2 - 4pm", "Attire":"School Uniform"},"choir": { "Venue":"LT4", "Date":"13 Jan, 20 Jan, 27 Jan, 3 Feb (@ 3.00pm - 3.30pm)                     16 Jan, 23 Jan, 30 Jan, 6 Feb (@ 2.00pm - 2.30pm)", "Attire":"School Uniform"},"english drama": { "Venue":"SALT Centre Activity Room 2-1", "Date":"16th Jan, 21st Jan, 23rd Jan, 28th Jan, 30th Jan, 2.00pm - 4.00pm", "Attire":"PE Attire"},"piano ensemble": { "Venue":"By Invitiation Only. <br>Check EMB for instructions from Mr. Tan Boon Beng (tanbb@hc.edu.sg)", "Date":"", "Attire":""},"school band": { "Venue":"SALT Centre<br>(Band Room)", "Date":" Wednesday, Friday / Time : 2.30 to 4", "Attire":"School Uniform"},"string orchestra": { "Venue":"SALT Centre<br>(String Orchestra Room)", "Date":"18 and 19 Jan Timing: 2.45pm-6pm", "Attire":"School Uniform"},"chinese calligraphy": { "Venue":"C604", "Date":"Tuesdays- 2.30pm to 4pm. Fridays- 2.30pm to 5.30pm", "Attire":"School Uniform"},"chinese chess": { "Venue":"C302", "Date":"Wednesdays and Fridays, 2.30pm to 5.30pm", "Attire":"School Uniform"},"infocomm club": { "Venue":"Old Heritage Centre Near Kah Kee Hall", "Date":"16th Jan, 23rd Jan, 30th Jan ,6th Feb, 2:30pm - 5:30pm", "Attire":"School Uniform"},"english debate": { "Venue":"Clock Tower<br>T201-T203", "Date":"Wednesdays and Thursdays 1500-1800 - Details to be confirmed at CCA Orientation", "Attire":"School Uniform<br>(bring past debating competition certificates)"},"international chess": { "Venue":"B102", "Date":"", "Attire":"School Uniform"},"library": { "Venue":"Kong Chian Library", "Date":"Wednesdays and Fridays 1430h - 1600h", "Attire":"School Uniform"},"mediatech": { "Venue":"Outside LT3", "Date":"Thursday and Fridays 1430 - 1645", "Attire":"School Uniform"},"socrates club": { "Venue":"By Invitation Only.<br>Refer to your Math teacher for instructions / recommendations.", "Date":"", "Attire":""},"student enrichment & enterprise development club": { "Venue":"By Invitation Only. <br>(not open to Lower Secondary)", "Date":"", "Attire":""},"weiqi": { "Venue":"C301", "Date":"Wednesdays and Fridays 2:30pm to 5:30pm", "Attire":"School Uniform"},"youth flying club": { "Venue":"C203", "Date":"Tuesdays and Fridays 3pm - 5pm", "Attire":"PE Attire"}}';
    var a = JSON.parse(cici);
    if(typeof a[document.getElementById("test").innerHTML.toLowerCase()] === 'undefined'){
        var venue = a[document.getElementById("test").dataset.cca].Venue,
            date = a[document.getElementById("test").dataset.cca].Date,
            attire = a[document.getElementById("test").dataset.cca].Attire;
    }
    else{
        var venue = a[document.getElementById("test").innerHTML.toLowerCase()].Venue,
            date = a[document.getElementById("test").innerHTML.toLowerCase()].Date,
            attire = a[document.getElementById("test").innerHTML.toLowerCase()].Attire;
    }
    var x = document.getElementById("trial-info").childNodes;
    x[1].innerHTML="<h3 id='trial-dates'>Trial Dates</h3><p>"+date+"</p>";
    x[3].innerHTML="<h3 id='trial-venue'>Venue</h3><p>"+venue+"</p>";
    x[5].innerHTML="<h3 id='trial-attire'>Attire</h3><p>"+attire+"</p>";
});