var url = new URL(window.location.href);
var which = url.searchParams.get("which");
var title = decodeURI(url.searchParams.get("title"));
var blog = new GithubBlog('ishiikurisu/blog-posts');

blog.loadPost(`/${which}`, function(data) {
    var content = document.getElementById('content');

    if (data.error) {
        console.log(data.error);
        content.innerHTML = "<p>Erro inesperado :(</p><p>Tente novamente mais tarde</p>";
    } else {
        var post = {
            title: title,
            body: data
        };
        var convert = which.substr(-2) === "md";
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
});
