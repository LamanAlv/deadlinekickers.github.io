function page(pageNumber, input)
{
    var pages = document.getElementById('pages');
    pages.getElementsByClassName('active')[0].className = "";
    input.className = "active";


    var galery = document.getElementById('galery');
    galery.getElementsByClassName('grid')[0].className = "hidden";
    document.getElementById(pageNumber).className = "grid";

}