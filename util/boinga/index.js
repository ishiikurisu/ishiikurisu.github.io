document.getElementById('to-boinga').addEventListener('click', function() {
    const inlet = document.getElementById('human-text').value;
    const outlet = toBoinga(inlet);
    document.getElementById('martian-text').value = outlet;
});

document.getElementById('from-boinga').addEventListener('click', function() {
    const inlet = document.getElementById('martian-text').value;
    const outlet = fromBoinga(inlet);
    document.getElementById('human-text').value = outlet;
});
