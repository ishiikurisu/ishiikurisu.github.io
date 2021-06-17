var blog = new GithubBlog('ishiikurisu/notes');
blog.loadIndex(function(posts) {
    var content = document.getElementById('content');

    if (posts.error) {
        content.innerHTML = `
        <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            <h3 class="content-subhead">
                Erro inesperado :(
            </h3>
            <p>
                Tente novamente mais tarde
            </p>
        </div>
        `;
    } else if (posts.length === 0) {
        content.innerHTML = `
        <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            <h3 class="content-subhead">
                Está vazio por aqui...
            </h3>
            <p>
                Ainda precisamos escrever mais textos antes de postar aqui. Continue de olho!
            </p>
        </div>
        `;
    } else {
        var limit = posts.length;
        var outlet = "";

        for (var i = 0; i < limit; i++) {
            var post = posts[i];
            outlet += `
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h3 class="content-subhead">
                    <a class="joe-ribbon-header"
                       href="/notes/note.html?which=${post.path}&title=${encodeURIComponent(post.title)}">
                        ${post.title}
                    </a>
                </h3>
                <p>
                    ${post.description}
                </p>
            </div>
            `;
        }

        content.innerHTML = outlet;
    }
});
