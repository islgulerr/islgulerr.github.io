$(function(){
    $("#birthday").datepicker();
});
var programming_lang = [
    "ActionScript", 
    "AppleAcript", 
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
    ];
$( "#programminglanguage" ).autocomplete({
    source: programming_lang 
    });