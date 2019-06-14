var url = new URL(window.location.href);
var which = url.searchParams.get("which");
var blog = new GithubBlog('ishiikurisu/notes');

blog.loadPost(`/${which}`, function(data) {
    var content = document.getElementById('content');

    if (data.error) {
        console.log(data.error);
        content.innerHTML = "<p>Erro inesperado :(</p><p>Tente novamente mais tarde</p>";
    } else {
        var body = data;
        if (which.substr(-2) === "md") {
            var md = new Remarkable();
            body = md.render(body);
            console.log(body);
        }
        content.innerHTML = body;
        MathJax.Hub.Typeset();
    }
});
