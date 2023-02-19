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