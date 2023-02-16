window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll2Top").style.display = "block";
        document.getElementById("ip-show").style.display = "block";
    }
    else {
        document.getElementById("scroll2Top").style.display = "none";
        document.getElementById("ip-show").style.display = "none";
    }
}

var t;
function topFunction() {

    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -70);
        t = setTimeout('topFunction()', 20);
    }
    else {
        clearTimeout(t);
        return false;
    }
}

var body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

toggle.onclick = function () {
    sidebar.classList.toggle("close");
};

var editors = [];

$('.text-editor').each(function (idx, wrapper) {
    var e = new wysihtml.Editor($(wrapper).find('.editable').get(0), {
        toolbar: $(wrapper).find('.toolbar').get(0),
        parserRules: wysihtmlParserRules,
        stylesheets: "wysihtml/examples/css/stylesheet.css"
    });
    editors.push(e);
});

function previewFile() {
    var preview = document.querySelector('.preview');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
