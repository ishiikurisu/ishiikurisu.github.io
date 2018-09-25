$(document).ready(function() {
    $('#latex-input').keyup(function() {
        var input = $('#latex-input').val();
        var output = 'Digite a equação aqui...';
        
        if (input.length > 0) {
            output = "$$" + input + "$$";
        }
            
        $('#latex-output').html(output);
        MathJax.Hub.Typeset()
    });
});