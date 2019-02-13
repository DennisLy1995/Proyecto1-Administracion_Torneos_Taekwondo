document.querySelector("#menu-icon").addEventListener('click', changeClassForMenu);
function changeClassForMenu() {
    if (document.querySelector("#navbar").classList.contains('expand')) {
        document.querySelector("#navbar").classList.add('navbar');
        document.querySelector("#navbar").classList.remove('expand');
    }
    else if (document.querySelector("#navbar").classList.contains('navbar')) {
        document.querySelector("#navbar").classList.add('expand');
    }
}
var slideButton = document.querySelectorAll('.btn-add');
slideButton.forEach(function (element) {
    element.addEventListener('click', SlideForm);
});
var slideButtonClose = document.querySelectorAll('.close');
slideButtonClose.forEach(function (element) {
    element.addEventListener('click', CloseForm);
});
function SlideForm() {
    var element = $(this).attr('class');
    var parent = $(this).parent().parent().attr('id');
    $("#" + parent + " div:last-child .Form h2").text("Agregar");
    document.querySelector(".button").innerHTML = "Agregar";
    $("#" + parent + " .tableContent-Init").switchClass("col-xs-12", "col-xs-7", "easeInOutQuad");
    $("#" + parent + " .FormContent-Init").css({ "opacity": "0", "display": "block", }).animate({ opacity: 1 }, function () {
        $("#" + parent + " .FormContent-Init .Form").css('display', 'block');
    })
}
function CloseForm() {
    var parent = $(this).parent().parent().attr('id');
    $("#" + parent + " div:last-child .Form h2").text("");
    $("#" + parent + " .tableContent-Init").switchClass("col-xs-7", "col-xs-12", "easeInOutQuad");
    $("#" + parent + " .FormContent-Init").css({ "opacity": "0", "display": "none", }).animate({ opacity: 1 }, function () {
        $("#" + parent + " .FormContent-Init .Form").css('display', 'none');
    })
}


