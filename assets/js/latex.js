$(document).ready(function() {
    $('#latex-input').keyup(function() {
        var input = $('#latex-input').val();
        var sep = ($("input[name=options-radions]:checked").val())? "$$" : "`";
        var output = 'Digite a equação aqui...';
        
        if (input.length > 0) {
            output = sep + input + sep;
        }
            
        $('#latex-output').html(output);
        MathJax.Hub.Typeset();
    });
});