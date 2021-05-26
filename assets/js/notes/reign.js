function main() {
    var url = new URL(window.location.href);
    var page = url.searchParams.get("p") || "index.html";
    var blog = new GithubBlog("ishiikurisu/reign-wiki");

    blog.loadPost(page, function(data) {
        var content = "<p>Erro inesperado :(</p><p>Tente novamente mais tarde</p>";

        if (data.error) {
            console.log(data.error);
        } else {
            var body = data;
            var parts = which.split('.');

            if (parts[parts.length - 1] === "md") {
                var md = new Remarkable();
                body = md.render(body);
            }

            content = body;
        }

        document.getElementById('content').innerHTML = content;
    });
}
