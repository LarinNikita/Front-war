var body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

toggle.onclick = function () {
    sidebar.classList.toggle("close");
};

function show_hide_password(target) {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

var Form = document.querySelector(".form");

var openForm = function () {
    Form.style.display = "block";
    body.style.overflow = "hidden";
};
var closeForm = function () {
    Form.style.display = "none";
    body.style.overflow = "auto";
};

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

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll2Top").style.display = "block";
    }
    else{
        document.getElementById("scroll2Top").style.display = "none";
    }
}

var t;
function topFunction(){

    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0){
        window.scrollBy(0, -70);
        t = setTimeout('topFunction()', 20);
    }
    else{
        clearTimeout(t);
        return false;
    }
}

$(document).ready(function () {
    $('.js-select2').select2({
        placeholder: "Выберите",
        maximumSelectionLength: 2,
        language: "ru"
    });
});