//check #
(function ()
{
    if (location.hash) {               // do the test straight away
        window.scrollTo(0, 0);         // execute it straight away
        setTimeout(function() {
            window.scrollTo(0, 0);     // run it a bit later also for browser compatibility
            fscroll(location.hash);
        }, 1);
        
    }
    /*hashid = window.location.hash;
    setTimeout(function ()
    {
        if (hashid)
        {
            window.scrollTo(0, 0);
            fscroll(hashid);
        }
    }, 1);*/
})();

// Check if a new cache is available on page load.
try 
{
    window.addEventListener('load', function(e) 
    {
        window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            if (confirm('A new version of this site is available. Load it?')) 
            {
                window.location.reload();
            }
        } 
        else 
        {
            // Manifest didn't change. Nothing new to server.
        }
      }, false);
    }, false);
}
catch(e) {}

//Init
var searchopen = false;
var sfocus = false;
var searchmo = false;
var ccasearchfo = false;
var submenu2mo = false;
var prefix = "/hs_cca/";
var cca = [
    { label: "Badminton", url:prefix+"cca/sports/badminton/", category: "Sports" },
    { label: "Basketball", url:prefix+"cca/sports/basketball/", category: "Sports" },
    { label: "Canoeing", url:prefix+"cca/sports/canoeing/", category: "Sports" },
    { label: "Cross Country", url:prefix+"cca/sports/crosscountry/", category: "Sports" },
    { label: "Fencing", url:prefix+"cca/sports/fencing/", category: "Sports" },
    { label: "Gymnastics", url:prefix+"cca/sports/gymnastics/", category: "Sports" },
    { label: "Judo", url:prefix+"cca/sports/judo/", category: "Sports" },
    { label: "Shooting", url:prefix+"cca/sports/shooting/", category: "Sports" },
    { label: "Softball", url:prefix+"cca/sports/softball/", category: "Sports" },
    { label: "Squash", url:prefix+"cca/sports/squash/", category: "Sports" },
    { label: "Table Tennis", url:prefix+"cca/sports/tabletennis/", category: "Sports" },
    { label: "Tennis", url:prefix+"cca/sports/tennis/", category: "Sports" },
    { label: "Track and Field", url:prefix+"cca/sports/trackandfield/", category: "Sports" },
    { label: "Volleyball", url:prefix+"cca/sports/volleyball/", category: "Sports" },
    { label: "Waterpolo", url:prefix+"cca/sports/waterpolo/", category: "Sports" },
    { label: "Wushu", url:prefix+"cca/sports/wushu/", category: "Sports" },

    { label: "National Cadet Corps", url:prefix+"cca/ug/ncc/", category: "Uniformed Groups" },
    { label: "National Police Cadet Corps", url:prefix+"cca/ug/npcc/", category: "Uniformed Groups" },
    { label: "Scouts", url:prefix+"cca/ug/scouts/", category: "Uniformed Groups" },
    { label: "St. John Ambulance Brigade", url:prefix+"cca/ug/sjab/", category: "Uniformed Groups" },

    { label: "Art Club", url:prefix+"cca/aesthetics/artclub/", category: "Aesthetics" },
    { label: "Band", url:prefix+"cca/aesthetics/band/", category: "Aesthetics" },
    { label: "Chinese Drama", url:prefix+"cca/aesthetics/chinesedrama/", category: "Aesthetics" },
    { label: "Chinese Orchestra", url:prefix+"cca/aesthetics/chineseorchestra/", category: "Aesthetics" },
    { label: "Choir", url:prefix+"cca/aesthetics/choir/", category: "Aesthetics" },
    { label: "English Drama", url:prefix+"cca/aesthetics/englishdrama/", category: "Aesthetics" },
    { label: "Piano Ensemble", url:prefix+"cca/aesthetics/pianoensemble/", category: "Aesthetics" },
    { label: "String Orchestra", url:prefix+"cca/aesthetics/stringorchestra/", category: "Aesthetics" },

    { label: "Chinese Calligraphy", url:prefix+"cca/clubs/chinesecalligraphy/", category: "Clubs and Societies" },
    { label: "Chinese Chess", url:prefix+"cca/clubs/chinesechess/", category: "Clubs and Societies" },
    { label: "Infocomm Club", url:prefix+"cca/clubs/infocommclub/", category: "Clubs and Societies" },
    { label: "English Debate", url:prefix+"cca/clubs/englishdebate/", category: "Clubs and Societies" },
    { label: "International Chess", url:prefix+"cca/clubs/internationalchess/", category: "Clubs and Societies" },
    { label: "Library", url:prefix+"cca/clubs/library/", category: "Clubs and Societies" },
    { label: "Mediatech", url:prefix+"cca/clubs/mediatech/", category: "Clubs and Societies" },
    //{ label: "Robotics Club", url:prefix+"cca/clubs/robotics/", category: "Clubs and Societies" },
    { label: "Socrates Club", url:prefix+"cca/clubs/socrates/", category: "Clubs and Societies" },
    { label: "Weiqi", url:prefix+"cca/clubs/weiqi/", category: "Clubs and Societies" },
    { label: "Youth Flying Club", url:prefix+"cca/clubs/youthflyingclub/", category: "Clubs and Societies" }
];

    $(document).ready(function () {
        //prepend beta message
        if (sessionStorage['hs_cca-stopbetamsg'] != "true") {
            $("#topcontent").prepend('<div id="betaMsg">This website is currently still in its beta development stage. Parts of the webpage may display incorrectly. Thank you for your kind understanding. <div id="beta-close-button">&#215;</div></div>').promise().done(function () {
                $("#betaMsg").delay(1000).slideDown(500);
                $(".backlink").delay(900).animate(
            {
                "marginTop": 5
            }, 'fast');

                $("#beta-close-button").click(function (e) {
                    sessionStorage['hs_cca-stopbetamsg'] = true;
                    //slideup
                    $("#betaMsg").slideUp(500);
                });
            });
        }
        //else if (sessionStorage['hs_cca-stopbetamsg']) { }
        else {
            /*
            $("#topcontent").prepend('<div id="betaMsg">This website is currently is still in its beta development stage. Parts of the webpage may display incorrectly. Thank you for your kind understanding. <div id="beta-close-button">&#215;</div></div>').promise().done(function ()
            {
            $("#betaMsg").delay(1000).slideDown(500);
            $(".backlink").delay(900).animate(
            {
            "marginTop": 5
            }, 'fast');

            $("#beta-close-button").click(function (e)
            {
            try
            {
            sessionStorage['hs_cca-stopbetamsg'] = true;
            }
            catch (e) { }
            //slideup
            $("#betaMsg").slideUp(500);
            });
            });

            //*/
        }


        /*---------SEARCH--------*/
        $("#search-area").mouseenter(function () {
            searchmo = true;
            /*$("#search").css("border", "1px solid #be0000");
            $("#search").css("border-top", "none");*/
            $("#search-input").css("border-bottom", "1px solid #be0000");
            $("#search-area .corner").css("background-color", "#be0000");
            $("#search-iconi").css("display", "none");
            $("#search-icona").css("display", "");
            if (!searchopen) {
                $("#search").stop(true, false).slideDown(150);
                $("#search-input").focus();
                searchopen = true;
            }
        });
        $("#search-area").mouseleave(function () {
            searchmo = false;
            $("#search-input").css("border-bottom", "1px solid #aaa");
            $(".corner").css("background-color", "#aaa");
            $("#search-icona").css("display", "none");
            $("#search-iconi").css("display", "");
            if ((searchopen) && (!sfocus)) {
                $("#search").stop(true, false).slideUp(150);
                searchopen = false;
            }
        });
        $("#search-area").keyup(function (e) {
            if (e.keyCode == 13) {
                q = $("#search-input").val();
                ksearch(q);
            }
        });

        /*---------SUB-MENUS--------*/
        $(".navbarmenu").mouseenter(function () {
            subID = parseInt($(this).attr("data-link"));
            //$("#sub"+subID).css("display","block");
            if (subID) {
                $("#sub" + subID).stop(true, false).slideDown(200);
                if (subID == 2) submenu2mo = true;
            }
        });

        $(".navbarmenu").mouseleave(function () {
            subID = parseInt($(this).attr("data-link"));
            if (subID > 2) {
                $("#sub" + subID).stop(true, false).slideUp(200);
            }
            else if (subID == 2) {
                submenu2mo = false;
                if (!ccasearchfo) {
                    $("#sub" + subID).stop(true, false).slideUp(200);
                }
            }
        });

        //------SUBSEARCH-------
        $("#sub_search").mouseenter(function () {
            $("#ccasearch").css("border-bottom", "1px solid #be0000");
            $("#sub_search .corner").css("background-color", "#be0000");
        });

        $("#sub_search").mouseleave(function () {
            $("#ccasearch").css("border-bottom", "1px solid #aaa");
            $("#sub_search .corner").css("background-color", "#aaa");
        });

        $("#ccasearch").catcomplete(
    {
        delay: 0,
        autoFocus: true,
        source: cca,
        select: function (event, ui) {
            window.location = ui.item.url;
        }
    });
        $("#sub_search").keyup(function (e) {
            if (e.keyCode == 13) {
                q = $("#sub_search").val();
                ccasearch(q);
            }
        });

        //scrolling
        $("a[href^='#']").click(function (e) {
            DieseID = $(this).attr("href");
            if (DieseID != '#') {
                fscroll(DieseID);
            }
            //e.preventDefault();
        });

        //movetotop
        $("#move-top-icon").click(function () {
            fscroll(0);
        });
    });

//jqueryui autocomplete
$.widget("custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function (ul, items)
    {
        var that = this,
        currentCategory = "";
        $.each(items, function (index, item)
        {
            if (item.category != currentCategory)
            {
                ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                currentCategory = item.category;
            }
            that._renderItemData(ul, item);
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
        //logconsole("ccasearchfo:" + ccasearchfo);
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
        logconsole("Empty query");
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
        if(confirm("Sorry, the search function is currently still under development\n\nSorry for any inconvenience caused.\n\nWould you like to use our sitemap instead?")) window.location = "/hs_cca/sitemap/";
        //search here
    }
}

//fsescape
function fescape(text)
{
    var a = escape(text).replace(/%(..)/g,"&#x$1;");
    return a;
}

$(window).load(function ()
{
    try
    {
        if (localStorage["bgChange"])
        {
            changeBg(localStorage["favBg"]);
        }
    }
    catch (e) { }
});

function changeBg(classz)
{
	$("html")[0].className = classz.split("changeBg_")[1]+"_bg";
	localStorage["bgChange"] = true;
	localStorage["favBg"] = classz;
}


//console.log
function logconsole(msg)
{
    try
    {
        console.log(msg);
    }
    catch (e) { }
}

//scrollTop "#" offset + navbar height + 10px(?)
function fscroll(id)
{
    if(!id)
    {
        $("html, body").stop(true, false).animate({ scrollTop: 0 });
    }
    else
    {
        var off = $(id).offset().top;
        off -= $("#menu").height();
        off -= 10;
        $("html, body").stop(true, false).animate({ scrollTop: off });
    }
}

//email validation
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

/**
 * Function generates a random string for use in unique IDs, etc
 *
 * @param <int> n - The length of the string
 */
function randString(n)
{
    if(!n)
    {
        n = 5;
    }
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < n; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

//hashString
String.prototype.hashCode = function(){
    var hash = 0, i, chari;
    if (this.length == 0) return hash;
    for (i = 0, l = this.length; i < l; i++) {
        chari  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+chari;
        hash |= 0; // Convert to 32bit integer
    }
    return (Math.abs(hash)%7 + 1);
};

//stacktrace
// Domain Public by Eric Wendelin http://eriwen.com/ (2008)
//                  Luke Smith http://lucassmith.name/ (2008)
//                  Loic Dachary <loic@dachary.org> (2008)
//                  Johan Euphrosine <proppy@aminche.com> (2008)
//                  Oyvind Sean Kinsey http://kinsey.no/blog (2010)
//                  Victor Homyakov <victor-homyakov@users.sourceforge.net> (2010)
/*global module, exports, define, ActiveXObject*/
(function(global, factory) {
    if (typeof exports === 'object') {
        // Node
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals
        global.printStackTrace = factory();
    }
}(this, function() {
    /**
     * Main function giving a function stack trace with a forced or passed in Error
     *
     * @cfg {Error} e The error to create a stacktrace from (optional)
     * @cfg {Boolean} guess If we should try to resolve the names of anonymous functions
     * @return {Array} of Strings with functions, lines, files, and arguments where possible
     */
    function printStackTrace(options) {
        options = options || {guess: true};
        var ex = options.e || null, guess = !!options.guess;
        var p = new printStackTrace.implementation(), result = p.run(ex);
        return (guess) ? p.guessAnonymousFunctions(result) : result;
    }

    printStackTrace.implementation = function() {
    };

    printStackTrace.implementation.prototype = {
        /**
         * @param {Error} ex The error to create a stacktrace from (optional)
         * @param {String} mode Forced mode (optional, mostly for unit tests)
         */
        run: function(ex, mode) {
            ex = ex || this.createException();
            // examine exception properties w/o debugger
            //for (var prop in ex) {alert("Ex['" + prop + "']=" + ex[prop]);}
            mode = mode || this.mode(ex);
            if (mode === 'other') {
                return this.other(arguments.callee);
            } else {
                return this[mode](ex);
            }
        },

        createException: function() {
            try {
                this.undef();
            } catch (e) {
                return e;
            }
        },

        /**
         * Mode could differ for different exception, e.g.
         * exceptions in Chrome may or may not have arguments or stack.
         *
         * @return {String} mode of operation for the exception
         */
        mode: function(e) {
            if (e['arguments'] && e.stack) {
                return 'chrome';
            } else if (e.stack && e.sourceURL) {
                return 'safari';
            } else if (e.stack && e.number) {
                return 'ie';
            } else if (e.stack && e.fileName) {
                return 'firefox';
            } else if (e.message && e['opera#sourceloc']) {
                // e.message.indexOf("Backtrace:") > -1 -> opera9
                // 'opera#sourceloc' in e -> opera9, opera10a
                // !e.stacktrace -> opera9
                if (!e.stacktrace) {
                    return 'opera9'; // use e.message
                }
                if (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
                    // e.message may have more stack entries than e.stacktrace
                    return 'opera9'; // use e.message
                }
                return 'opera10a'; // use e.stacktrace
            } else if (e.message && e.stack && e.stacktrace) {
                // e.stacktrace && e.stack -> opera10b
                if (e.stacktrace.indexOf("called from line") < 0) {
                    return 'opera10b'; // use e.stacktrace, format differs from 'opera10a'
                }
                // e.stacktrace && e.stack -> opera11
                return 'opera11'; // use e.stacktrace, format differs from 'opera10a', 'opera10b'
            } else if (e.stack && !e.fileName) {
                // Chrome 27 does not have e.arguments as earlier versions,
                // but still does not have e.fileName as Firefox
                return 'chrome';
            }
            return 'other';
        },

        /**
         * Given a context, function name, and callback function, overwrite it so that it calls
         * printStackTrace() first with a callback and then runs the rest of the body.
         *
         * @param {Object} context of execution (e.g. window)
         * @param {String} functionName to instrument
         * @param {Function} callback function to call with a stack trace on invocation
         */
        instrumentFunction: function(context, functionName, callback) {
            context = context || window;
            var original = context[functionName];
            context[functionName] = function instrumented() {
                callback.call(this, printStackTrace().slice(4));
                return context[functionName]._instrumented.apply(this, arguments);
            };
            context[functionName]._instrumented = original;
        },

        /**
         * Given a context and function name of a function that has been
         * instrumented, revert the function to it's original (non-instrumented)
         * state.
         *
         * @param {Object} context of execution (e.g. window)
         * @param {String} functionName to de-instrument
         */
        deinstrumentFunction: function(context, functionName) {
            if (context[functionName].constructor === Function &&
                context[functionName]._instrumented &&
                context[functionName]._instrumented.constructor === Function) {
                context[functionName] = context[functionName]._instrumented;
            }
        },

        /**
         * Given an Error object, return a formatted Array based on Chrome's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        chrome: function(e) {
            return (e.stack + '\n')
                .replace(/^[\s\S]+?\s+at\s+/, ' at ') // remove message
                .replace(/^\s+(at eval )?at\s+/gm, '') // remove 'at' and indentation
                .replace(/^([^\(]+?)([\n$])/gm, '{anonymous}() ($1)$2')
                .replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}() ($1)')
                .replace(/^(.+) \((.+)\)$/gm, '$1@$2')
                .split('\n')
                .slice(0, -1);
        },

        /**
         * Given an Error object, return a formatted Array based on Safari's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        safari: function(e) {
            return e.stack.replace(/\[native code\]\n/m, '')
                .replace(/^(?=\w+Error\:).*$\n/m, '')
                .replace(/^@/gm, '{anonymous}()@')
                .split('\n');
        },

        /**
         * Given an Error object, return a formatted Array based on IE's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        ie: function(e) {
            return e.stack
                .replace(/^\s*at\s+(.*)$/gm, '$1')
                .replace(/^Anonymous function\s+/gm, '{anonymous}() ')
                .replace(/^(.+)\s+\((.+)\)$/gm, '$1@$2')
                .split('\n')
                .slice(1);
        },

        /**
         * Given an Error object, return a formatted Array based on Firefox's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        firefox: function(e) {
            return e.stack.replace(/(?:\n@:0)?\s+$/m, '')
                .replace(/^(?:\((\S*)\))?@/gm, '{anonymous}($1)@')
                .split('\n');
        },

        opera11: function(e) {
            var ANON = '{anonymous}', lineRE = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
            var lines = e.stacktrace.split('\n'), result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var location = match[4] + ':' + match[1] + ':' + match[2];
                    var fnName = match[3] || "global code";
                    fnName = fnName.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, ANON);
                    result.push(fnName + '@' + location + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                }
            }

            return result;
        },

        opera10b: function(e) {
            // "<anonymous function: run>([arguments not available])@file://localhost/G:/js/stacktrace.js:27\n" +
            // "printStackTrace([arguments not available])@file://localhost/G:/js/stacktrace.js:18\n" +
            // "@file://localhost/G:/js/test/functional/testcase1.html:15"
            var lineRE = /^(.*)@(.+):(\d+)$/;
            var lines = e.stacktrace.split('\n'), result = [];

            for (var i = 0, len = lines.length; i < len; i++) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var fnName = match[1] ? (match[1] + '()') : "global code";
                    result.push(fnName + '@' + match[2] + ':' + match[3]);
                }
            }

            return result;
        },

        /**
         * Given an Error object, return a formatted Array based on Opera 10's stacktrace string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        opera10a: function(e) {
            // "  Line 27 of linked script file://localhost/G:/js/stacktrace.js\n"
            // "  Line 11 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html: In function foo\n"
            var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n'), result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var fnName = match[3] || ANON;
                    result.push(fnName + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                }
            }

            return result;
        },

        // Opera 7.x-9.2x only!
        opera9: function(e) {
            // "  Line 43 of linked script file://localhost/G:/js/stacktrace.js\n"
            // "  Line 7 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html\n"
            var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n'), result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(ANON + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                }
            }

            return result;
        },

        // Safari 5-, IE 9-, and others
        other: function(curr) {
            var ANON = '{anonymous}', fnRE = /function\s*([\w\-$]+)?\s*\(/i, stack = [], fn, args, maxStackSize = 10;
            while (curr && curr['arguments'] && stack.length < maxStackSize) {
                fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
                args = Array.prototype.slice.call(curr['arguments'] || []);
                stack[stack.length] = fn + '(' + this.stringifyArguments(args) + ')';
                curr = curr.caller;
            }
            return stack;
        },

        /**
         * Given arguments array as a String, substituting type names for non-string types.
         *
         * @param {Arguments,Array} args
         * @return {String} stringified arguments
         */
        stringifyArguments: function(args) {
            var result = [];
            var slice = Array.prototype.slice;
            for (var i = 0; i < args.length; ++i) {
                var arg = args[i];
                if (arg === undefined) {
                    result[i] = 'undefined';
                } else if (arg === null) {
                    result[i] = 'null';
                } else if (arg.constructor) {
                    if (arg.constructor === Array) {
                        if (arg.length < 3) {
                            result[i] = '[' + this.stringifyArguments(arg) + ']';
                        } else {
                            result[i] = '[' + this.stringifyArguments(slice.call(arg, 0, 1)) + '...' + this.stringifyArguments(slice.call(arg, -1)) + ']';
                        }
                    } else if (arg.constructor === Object) {
                        result[i] = '#object';
                    } else if (arg.constructor === Function) {
                        result[i] = '#function';
                    } else if (arg.constructor === String) {
                        result[i] = '"' + arg + '"';
                    } else if (arg.constructor === Number) {
                        result[i] = arg;
                    }
                }
            }
            return result.join(',');
        },

        sourceCache: {},

        /**
         * @return the text from a given URL
         */
        ajax: function(url) {
            var req = this.createXMLHTTPObject();
            if (req) {
                try {
                    req.open('GET', url, false);
                    //req.overrideMimeType('text/plain');
                    //req.overrideMimeType('text/javascript');
                    req.send(null);
                    //return req.status == 200 ? req.responseText : '';
                    return req.responseText;
                } catch (e) {
                }
            }
            return '';
        },

        /**
         * Try XHR methods in order and store XHR factory.
         *
         * @return <Function> XHR function or equivalent
         */
        createXMLHTTPObject: function() {
            var xmlhttp, XMLHttpFactories = [
                function() {
                    return new XMLHttpRequest();
                }, function() {
                    return new ActiveXObject('Msxml2.XMLHTTP');
                }, function() {
                    return new ActiveXObject('Msxml3.XMLHTTP');
                }, function() {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                }
            ];
            for (var i = 0; i < XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = XMLHttpFactories[i]();
                    // Use memoization to cache the factory
                    this.createXMLHTTPObject = XMLHttpFactories[i];
                    return xmlhttp;
                } catch (e) {
                }
            }
        },

        /**
         * Given a URL, check if it is in the same domain (so we can get the source
         * via Ajax).
         *
         * @param url <String> source url
         * @return <Boolean> False if we need a cross-domain request
         */
        isSameDomain: function(url) {
            return typeof location !== "undefined" && url.indexOf(location.hostname) !== -1; // location may not be defined, e.g. when running from nodejs.
        },

        /**
         * Get source code from given URL if in the same domain.
         *
         * @param url <String> JS source URL
         * @return <Array> Array of source code lines
         */
        getSource: function(url) {
            // TODO reuse source from script tags?
            if (!(url in this.sourceCache)) {
                this.sourceCache[url] = this.ajax(url).split('\n');
            }
            return this.sourceCache[url];
        },

        guessAnonymousFunctions: function(stack) {
            for (var i = 0; i < stack.length; ++i) {
                var reStack = /\{anonymous\}\(.*\)@(.*)/,
                    reRef = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
                    frame = stack[i], ref = reStack.exec(frame);

                if (ref) {
                    var m = reRef.exec(ref[1]);
                    if (m) { // If falsey, we did not get any file/line information
                        var file = m[1], lineno = m[2], charno = m[3] || 0;
                        if (file && this.isSameDomain(file) && lineno) {
                            var functionName = this.guessAnonymousFunction(file, lineno, charno);
                            stack[i] = frame.replace('{anonymous}', functionName);
                        }
                    }
                }
            }
            return stack;
        },

        guessAnonymousFunction: function(url, lineNo, charNo) {
            var ret;
            try {
                ret = this.findFunctionName(this.getSource(url), lineNo);
            } catch (e) {
                ret = 'getSource failed with url: ' + url + ', exception: ' + e.toString();
            }
            return ret;
        },

        findFunctionName: function(source, lineNo) {
            // FIXME findFunctionName fails for compressed source
            // (more than one function on the same line)
            // function {name}({args}) m[1]=name m[2]=args
            var reFunctionDeclaration = /function\s+([^(]*?)\s*\(([^)]*)\)/;
            // {name} = function ({args}) TODO args capture
            // /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function(?:[^(]*)/
            var reFunctionExpression = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
            // {name} = eval()
            var reFunctionEvaluation = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
            // Walk backwards in the source lines until we find
            // the line which matches one of the patterns above
            var code = "", line, maxLines = Math.min(lineNo, 20), m, commentPos;
            for (var i = 0; i < maxLines; ++i) {
                // lineNo is 1-based, source[] is 0-based
                line = source[lineNo - i - 1];
                commentPos = line.indexOf('//');
                if (commentPos >= 0) {
                    line = line.substr(0, commentPos);
                }
                // TODO check other types of comments? Commented code may lead to false positive
                if (line) {
                    code = line + code;
                    m = reFunctionExpression.exec(code);
                    if (m && m[1]) {
                        return m[1];
                    }
                    m = reFunctionDeclaration.exec(code);
                    if (m && m[1]) {
                        //return m[1] + "(" + (m[2] || "") + ")";
                        return m[1];
                    }
                    m = reFunctionEvaluation.exec(code);
                    if (m && m[1]) {
                        return m[1];
                    }
                }
            }
            return '(?)';
        }
    };

    return printStackTrace;
}));

//animateAuto
(function($) {
    $.fn.animateAuto = function(prop, speed, callback) {
        var elem, height, width;
        return this.each(function(i, el) {
            el = $(el), elem = el.clone().css({
                "height": "auto",
                "width": "auto"
            }).appendTo("body");
            height = elem.css("height"), width = elem.css("width"), elem.remove();

            if (prop === "height") {
                el.animate({
                    "height": height
                }, speed, callback);
            }
            else if (prop === "width") {
                el.animate({
                    "width": width
                }, speed, callback);
            }
            else if (prop === "both") {
                el.animate({
                    "width": width,
                    "height": height
                }, speed, callback);
            }
        });
    }
})(jQuery);

//jQuery autoellipsis
/*!

    Copyright (c) 2011 Peter van der Spek

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
 */(function(a){function m(){if(!d){d=!0;for(var c in b)a(c).each(function(){var d,e;d=a(this),e=d.data("jqae"),(e.containerWidth!=d.width()||e.containerHeight!=d.height())&&f(d,b[c])});d=!1}}function l(a){b[a]&&(delete b[a],b.length||c&&(window.clearInterval(c),c=undefined))}function k(a,d){b[a]=d,c||(c=window.setInterval(function(){m()},200))}function j(){return this.nodeType===3}function i(b){if(b.contents().length){var c=b.contents(),d=c.eq(c.length-1);if(d.filter(j).length){var e=d.get(0).nodeValue;e=a.trim(e);if(e==""){d.remove();return!0}return!1}while(i(d));if(d.contents().length)return!1;d.remove();return!0}return!1}function h(a){if(a.contents().length){var b=a.contents(),c=b.eq(b.length-1);return c.filter(j).length?c:h(c)}a.append("");var b=a.contents();return b.eq(b.length-1)}function g(b){var c=h(b);if(c.length){var d=c.get(0).nodeValue,e=d.lastIndexOf(" ");e>-1?(d=a.trim(d.substring(0,e)),c.get(0).nodeValue=d):c.get(0).nodeValue="";return!0}return!1}function f(b,c){var d=b.data("jqae");d||(d={});var e=d.wrapperElement;e||(e=b.wrapInner("<div/>").find(">div"),e.css({margin:0,padding:0,border:0}));var f=e.data("jqae");f||(f={});var j=f.originalContent;j?e=f.originalContent.clone(!0).data("jqae",{originalContent:j}).replaceAll(e):e.data("jqae",{originalContent:e.clone(!0)}),b.data("jqae",{wrapperElement:e,containerWidth:b.width(),containerHeight:b.height()});var k=b.height(),l=(parseInt(b.css("padding-top"),10)||0)+(parseInt(b.css("border-top-width"),10)||0)-(e.offset().top-b.offset().top),m=!1,n=e;c.selector&&(n=a(e.find(c.selector).get().reverse())),n.each(function(){var b=a(this),d=b.text(),f=!1;if(e.innerHeight()-b.innerHeight()>k+l)b.remove();else{i(b);if(b.contents().length){m&&(h(b).get(0).nodeValue+=c.ellipsis,m=!1);while(e.innerHeight()>k+l){f=g(b);if(!f){m=!0,b.remove();break}i(b);if(b.contents().length)h(b).get(0).nodeValue+=c.ellipsis;else{m=!0,b.remove();break}}c.setTitle=="onEllipsis"&&f||c.setTitle=="always"?b.attr("title",d):c.setTitle!="never"&&b.removeAttr("title")}}})}var b={},c,d=!1,e={ellipsis:"...",setTitle:"never",live:!1};a.fn.ellipsis=function(b,c){var d,g;d=a(this),typeof b!="string"&&(c=b,b=undefined),g=a.extend({},e,c),g.selector=b,d.each(function(){var b=a(this);f(b,g)}),g.live?k(d.selector,g):l(d.selector);return this}})(jQuery)