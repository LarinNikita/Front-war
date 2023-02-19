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

var button = document.getElementById('loginForm');

var openLoginForm = function() {
	button.className = 'active';
    body.style.overflow = "hidden";
};

var checkInput = function(input) {
	if (input.value.length > 0) {
		input.className = 'active';
        body.style.overflow = "hidden";
	} else {
		input.className = '';
        body.style.overflow = "auto";
	}
};

var closeLoginForm = function() {
	button.className = '';
    body.style.overflow = "auto";
};

document.addEventListener("keyup", function(e) {
	if (e.keyCode == 27 || e.keyCode == 13) {
		closeForm();
	}
});

function show_hide_password(target){
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
