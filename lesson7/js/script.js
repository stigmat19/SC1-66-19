$(document).ready(function () {

    $('#btn').click(function () {
      $('#text').html('<h1>link</h1>');
    });


    $('input[name=num1]').blur(function () {

        console.log('$(this).value', $(this).val());

        if($(this).val() !== ''){
            $(this).css("border", "1px solid green");
        }
        else {
            $(this).css("border", "1px solid red");
        }
    });

    // http://fe.it-academy.by/TestForm.php

    $( "#test" ).draggable();

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

});





