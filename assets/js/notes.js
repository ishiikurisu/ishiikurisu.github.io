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

$(document).ready(function() {
    var notebook = getUrlParameter('notebook');
    var url = 'http://gitcdn.xyz/repo/ishiikurisu/math-notes/master/' + notebook + '.html';
    $.get({
        url: url,
        type: 'GET',
        data: {

        },
        success: function(data) {
            var html = $(data);
            var body = html.children("body");
            var content = $('.content');
            content.html(html);
            MathJax.Hub.Typeset();
        }
    });
});
