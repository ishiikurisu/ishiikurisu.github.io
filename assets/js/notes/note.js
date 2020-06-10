var url = new URL(window.location.href);
var which = url.searchParams.get("which");
var blog = new GithubBlog('ishiikurisu/notes');

function renderCsv(csv) {
    var html = `<table class="pure-table pure-table-bordered">`;
    var rows = csv.split("\n");
    var rowCount = rows.length;
    var firstLine = true;
    var i = 0;

    for (var j = 0; j < rowCount; j++) {
        var line = "";
        var row = rows[j];
        var fields = row.split(",");
        var fieldCount = fields.length;

        if (row.length === 0) {
            continue;
        }

        if (firstLine) {
            line += "<br/><thead><tr>";
            for (i = 0; i < fieldCount; i++) {
                line += `<th>${fields[i]}</th>`;
            }
            line += "</tr></thead><tbody>";
            firstLine = false;
        } else {
            line += "<tr>";
            for (i = 0; i < fieldCount; i++) {
                line += `<td>${fields[i]}</td>`;
            }
            line += "</tr>";
        }

        html += line;
    }

    if (rowCount > 0) {
        html += "</tbody>";
    }
    html += "</table>";

    return html
}

blog.loadPost(`/${which}`, function(data) {
    var content = document.getElementById('content');

    if (data.error) {
        console.log(data.error);
        content.innerHTML = "<p>Erro inesperado :(</p><p>Tente novamente mais tarde</p>";
    } else {
        var body = data;
        var parts = which.split('.');
        switch (parts[parts.length - 1]) {
            case "md":
                var md = new Remarkable();
                body = md.render(body);
                break;
            case "csv":
                body = renderCsv(body);
                break;
        }
        content.innerHTML = body;
        MathJax.Hub.Typeset();

        var dummyHtml = document.createElement('html');
        dummyHtml.innerHTML = body;
        var scripts = dummyHtml.getElementsByTagName('script');
        if (scripts.length > 0) {
            eval(scripts[0].innerHTML)();
        }
    }
});
