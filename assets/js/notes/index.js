function get(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            callback(data);
        } else {
            callback({error: "Bad request"});
        }
    };
    request.onerror = function() {
        callback({error: "Connection error"});
    };
    request.send();
}

function draw(content, posts) {
    var limit = posts.length;
    var outlet = `
        <h2 class="content-head is-center">Todas as anotações</h2>
        <ul>
    `;

    for (var i = 0; i < limit; i++) {
        var post = posts[i];
        outlet += `
            <li>
                <a href="/notes/note.html?which=`+post.path+`&title=`+encodeURI(post.title)+`">
                    `+post.title+`
                </a>
            </li>
        `;
    }

    outlet += "</ul>";
    content.innerHTML = outlet;
}

get("https://www.gitcdn.xyz/repo/ishiikurisu/blog-posts/master/index.json", function(data) {
    var content = document.getElementById('content');

    if (data.error) {
        content.innerHTML = "<p>Erro inesperadp :(</p><p>Tente novamente mais tarde</p>";
    } else {
        draw(content, data);
    }
});
