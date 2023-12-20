document.addEventListener('DOMContentLoaded', function() {
    var editor = CodeMirror.fromTextArea(document.getElementById('codeBox'), {
        mode: "javascript",
        lineNumbers: true,
        theme: "dracula",
        autoCloseBrackets: true,
    });

    editor.on('keydown', () => {
        try {
            eval(editor.getValue());
        } catch (error) {
            console.error(error);
        }
    });
});
