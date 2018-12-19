function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function extract_body(html) {
    var lines = html.split('\n');
    var important_lines = [ ];
    var body = '';

    // extracting body lines
    var inside = false;
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();

    }

    // consolidating body lines


    return body;
}

$(document).ready(function() {
    var notebook = getUrlParameter('notebook');
    var url = 'https://raw.githubusercontent.com/ishiikurisu/math-notes/master/' + notebook + '.html'
    $.get({
        url: url,
        type: 'GET',
        data: {

        },
        success: function(data) {
            var notes = $(extract_body(data));
            var content = $('.content');
            content.append(notes);
            MathJax.Hub.Typeset();
        }
    });
});
