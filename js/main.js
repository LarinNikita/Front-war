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