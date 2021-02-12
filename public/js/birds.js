'use strict';

$(async function() {
    let birds = await getAllBirds();
    birds.sort((bird1, bird2) => normalizeStr(bird1.name) > normalizeStr(bird2.name));
    const params = new URLSearchParams(window.location.search);
    if (params.has('query')) {
        const query = normalizeStr(params.get('query'));
        birds = birds.filter(bird => normalizeStr(bird.name).includes(query));
    }
    generateCards(birds);
});

function generateCards(birds) {
    birds.forEach(bird => {
        $(`<div class="card d-flex flex-column justify-content-between">
            <img src="${bird.image}" alt="${bird.name}" class="card-img-top w-100 overflow-hidden">
            <div class="card-body">
                <h5 class="card-title">${bird.name}</h5>
                <h6 class="card-subtitle mb-3 text-muted d-flex justify-content-between">
                    <i>${bird.scientificName}</i>
                    <a href="${bird.wiki}" target="blank" rel="noopener noreferrer">
                        <i class="fab fa-wikipedia-w"></i>
                    </a>
                </h6>
                <audio class="rounded w-100" controls loop>
                    <source src="${bird.sound}" type="audio/ogg">
                </audio>
            </div>
        </div>`).appendTo('#card-container');
    });
}
