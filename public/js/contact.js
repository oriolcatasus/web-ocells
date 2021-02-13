'use strict';

function handleSubmit(e) {
    e.preventDefault();
    const name = $('#name-input').val().trim();
    const surname = $('#surname-input').val().trim();
    let alertMessage;
    if (surname) {
        alertMessage = `Moltes gràcies per contactar amb nosaltres Sr/a. ${surname}, en un termini de tres dies rebrà la nostra resposta`;
    } else if (name) {
        alertMessage = `Moltes gràcies per contactar amb nosaltres ${name}, en un termini de tres dies rebràs la nostra resposta`;
    } else {
        alertMessage = `Moltes gràcies per contactar amb nosaltres, en un termini de tres dies rebrà la nostra resposta`;
    }
    const hiddenAlert = $('#alert-submit').clone();
    $('#alert-submit').replaceWith(`<div id="alert-submit" class="alert alert-primary" role="alert">${alertMessage}</div>`);
    $('#contact-form').trigger('reset');
    clearTimeout();
    setTimeout(() => $('#alert-submit').replaceWith(hiddenAlert), 5000);
}
