function Changer()
{
    window.open("page2.html");
    alert("if page didn't change, allow popups plz");
}

function nah()
{
    alert("why you no want see cattos!!!");
}


if (confirm("Clicking Ok will bring you to the second page, The Cat Image Changer") == true)
{
    Changer();
}
else
{
    nah();
}