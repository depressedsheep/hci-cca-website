//init
var submitted = false;

//contact form
$(document).ready(function ()
{
    //hover
    $(".cfr").mouseenter(function ()
    {
        $(this).find(".corner").css("background-color", "#be0000");
        $(this).find("input").css("border-bottom", "1px solid #be0000");
        $(this).find("textarea").css("border-bottom", "1px solid #be0000");
    });

    $(".cfr").mouseleave(function ()
    {
        $(this).find(".corner").css("background-color", "#aaa");
        $(this).find("input").css("border-bottom", "1px solid #aaa");
        $(this).find("textarea").css("border-bottom", "1px solid #aaa");
    });

    /*$(".txt").change(function ()
    {
    $("#contactF input[type='submit']").removeAttr("disabled");
    });

    $(".txt, #Cmsg").keypress(function (e)
    {
    $("#contactF input[type='submit']").removeAttr("disabled");
    });*/

    //submit
    $("#contactForm").submit(function (e)
    {
        $("#phpresponse").fadeOut(150, function ()
        {
            //validate
            var name = $.trim($("#Cname").val());
            var email = $.trim($("#Cemail").val());
            var subject = $.trim($("#Csubject").val());
            var msg = $.trim($("#Cmsg").val());
            if ((name != "" && name != null) && (email != "" && email != null) && (subject != "" && subject != null) && (msg != "" && msg != null))
            {
                if (isValidEmailAddress(email))
                {
                    //ajax
                    var url = "contactForm.php"; // the script where you handle the form input.
                    if(!submitted) 
                    {
                        var newKey = randString(50);
                        $("#Ckey").val(newKey + newKey.hashCode()); //key + check
                    }
                    else 
                    {
                        var newKey = randString(50);
                        $("#Ckey").val(newKey + (newKey.hashCode()+1)); //key + check
                    }
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $("#contactForm").serialize(), // serializes the form's elements.
                        success: function (data)
                        {
                            $("#Ckey").val("");
                            if (data == "OK")
                            {
                                $("#phpresponse").css("color", "green");
                                $("#phpresponse").html("Submission successful");
                                $("#phpresponse").fadeIn(150);
                                $("#contactF input[type='submit']").attr("disabled", "disabled");
                                submitted = true;
                            }
                            else
                            {
                                $("#phpresponse").css("color", "red");
                                $("#phpresponse").html("Submission unsuccessful, Error " + data);
                                logconsole("Error:" + data);
                                $("#phpresponse").fadeIn(150);
                            }
                        }
                    });
                }
                else
                {
                    $("#phpresponse").css("color", "#ff7070");
                    $("#phpresponse").html("Are you sure you typed your email correctly?");
                    $("#phpresponse").fadeIn(150);
                }
            }
            else
            {
                $("#phpresponse").css("color", "red");
                $("#phpresponse").html("Please fill in all fields");
                $("#phpresponse").fadeIn(150);
            }
        });
        // avoid to execute the actual submit of the form.
        e.preventDefault();
    });

    $("#contactForm")[0].onreset = function ()
    {
        txtchange();
    }
});

function txtchange() 
{
    $("#contactF input[type='submit']").removeAttr("disabled");
}