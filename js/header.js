'use strict';

$(function() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('query')) {
        $('#search-input').val(params.get('query'));
    }
})

function searchBird(e) {
    e.preventDefault();
    const query = normalizeStr($('#search-input').val());
    const baseUrl = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
    window.location.href = `${baseUrl}/birds.html?query=${query}`;
}
