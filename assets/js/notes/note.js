function get(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            callback(request.responseText);
        } else {
            callback({error: "Bad request"});
        }
    };
    request.onerror = function() {
        callback({error: "Connection error"});
    };
    request.send();
}

function draw(content, post, convert) {
    var outlet = `
        <h2 class="content-head is-center">`+ post.title +`</h2>
    `;
    var body = post.body;
    if (convert) {
        var md = new Remarkable();
        body = md.render(body);
    }
    outlet += body;
    content.innerHTML = outlet;
    MathJax.Hub.Typeset();
}

// MAIN FUNCTION

var url = new URL(window.location.href);
var which = url.searchParams.get("which");
var title = decodeURI(url.searchParams.get("title"));

get("https://www.gitcdn.xyz/repo/ishiikurisu/blog-posts/master/" + which, function(data) {
    var content = document.getElementById('content');

    if (data.error) {
        content.innerHTML = "<p>Erro inesperadp :(</p><p>Tente novamente mais tarde</p>";
    } else {
        draw(content, {title: title, body: data}, which.substr(-2) === "md");
    }
});
