var blog = new GithubBlog('ishiikurisu/blog-posts');
blog.loadIndex(function(posts) {
    var content = document.getElementById('content');

    if (posts.error) {
        content.innerHTML = "<p>Erro inesperadp :(</p><p>Tente novamente mais tarde</p>";
    } else {
        var limit = posts.length;
        var outlet = "";

        for (var i = 0; i < limit; i++) {
            var post = posts[i];
            outlet += `
            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                <h3 class="content-subhead">
                    <a class="joe-ribbon-header"
                       href="/notes/note.html?which=${post.path}&title=${encodeURI(post.title)}">
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
