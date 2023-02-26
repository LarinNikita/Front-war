var editors = [];

$('.text-editor').each(function (idx, wrapper) {
    var e = new wysihtml.Editor($(wrapper).find('.editable').get(0), {
        toolbar: $(wrapper).find('.toolbar').get(0),
        parserRules: wysihtmlParserRules,
        stylesheets: "wysihtml/examples/css/stylesheet.css"
    });
    editors.push(e);
});