$(document).ready(function ()
{
    $("#parents-eg-btn").click(function ()
    {
        $("#parents-eg").stop(true, false).slideToggle(300);
        if ($(this).html() == "Click to open")
        {
            $(this).html("Click to close");
        }
        else 
        {
            $(this).html("Click to open");
        }
    });
});